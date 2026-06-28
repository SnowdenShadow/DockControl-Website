# syntax=docker/dockerfile:1

# ===== Stage 1 — deps : installe les dépendances (cache séparé du code) =====
FROM node:22-alpine AS deps
# libc6-compat : requis par certaines deps natives sur Alpine.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ===== Stage 2 — builder : build Next.js en mode standalone =====
FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
# URL publique du site : inlinée au build (variable NEXT_PUBLIC_*) pour les
# balises canoniques/OG, le sitemap et le robots.txt. À surcharger via
#   docker build --build-arg NEXT_PUBLIC_SITE_URL=https://votre-domaine.io
ARG NEXT_PUBLIC_SITE_URL=http://localhost:3000
ENV NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL}
RUN npm run build

# ===== Stage 3 — runner : image finale minimale =====
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Utilisateur non-root pour exécuter le serveur.
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# Assets statiques publics.
COPY --from=builder /app/public ./public

# Sortie standalone : server.js + node_modules élagués (appartenant à nextjs).
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# Assets buildés (_next/static) servis par le serveur standalone.
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

# Healthcheck : le serveur répond-il sur la home ?
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:'+(process.env.PORT||3000)+'/').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

# server.js est généré à la racine de la sortie standalone par Next.js.
CMD ["node", "server.js"]
