/**
 * Layout racine.
 *
 * Le vrai <html>/<body> (avec lang/dir et les polices) est rendu par
 * app/[locale]/layout.tsx, car ils dépendent de la langue. Ce layout racine
 * ne fait que transmettre les enfants — il est requis par Next.js mais ne doit
 * pas redéclarer <html>.
 */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
