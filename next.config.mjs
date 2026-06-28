/** @type {import('next').NextConfig} */
const nextConfig = {
  // Émet un serveur autonome (.next/standalone) qui n'embarque que les
  // dépendances réellement utilisées — image Docker minimale, sans node_modules.
  output: "standalone",
};

export default nextConfig;
