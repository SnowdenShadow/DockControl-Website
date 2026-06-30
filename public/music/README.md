# Musique de fond

Dépose ici le fichier audio attendu par `app/components/BackgroundMusic.tsx` :

    public/music/track.mp3

- Formats fiables : `.mp3` (universel) ou `.ogg`.
- Pour un autre nom/chemin, ajuste la constante `SRC` dans
  `app/components/BackgroundMusic.tsx` (ou passe `<BackgroundMusic src="/music/xxx.mp3" />`).
- La lecture démarre au **premier geste** du visiteur (clic, scroll, touche…) :
  c'est la seule méthode fiable — les navigateurs bloquent l'autoplay avec son
  sans interaction, et un geste « simulé » en JS (isTrusted:false) est refusé.

## Important — droits

N'utilise que de l'audio dont tu possèdes les droits (ta création, libre de
droits, ou licence adaptée). Extraire la bande-son d'un morceau YouTube / YouTube
Music pour l'héberger ici enfreint généralement leurs conditions et le droit
d'auteur.
