# TP 1 — Angular et TypeScript (corrigé)

Programmation Web Avancée 2 · Chapitre 1 : Introduction à Angular et TypeScript
Oumaima Hammami

Projet corrigé du TP 1 (Angular 21, composants standalone).

## Lancer le projet

```bash
npm install
ng serve -o        # http://localhost:4200 — console (F12) pour l'exercice 4
ng test            # tests unitaires
```

## Correspondance exercices → fichiers

| Exercice | Fichiers |
|---|---|
| 1 — Projet | `ng new bibliotheque`, `ng serve -o` |
| 2 — Composant racine, header, footer | `src/app/app.ts`, `app.html`, `header/`, `footer/` |
| 3 — Modèles typés | `src/app/models/`, `src/app/data/livres.data.ts` |
| 4 — Fonctions typées | `src/app/utils/livre.utils.ts`, `NouveauLivre` dans `livre.model.ts`, tests dans le constructeur de `app.ts` |
| 5 — livre-card | `src/app/livre-card/` |
| 6 — livre-list | `src/app/livre-list/` |
| 7 — Bonus | `src/app/emprunt-list/` |

## Erreurs à provoquer

| Modification | Erreur |
|---|---|
| `genre: 'Poésie'` | TS2322 : Type '"Poésie"' is not assignable to type 'Genre'. |
| `statut: 'en cours'` | TS2820 : … Did you mean '"EN_COURS"'? |
| `LIVRES[0].id = 10;` | TS2540 : Cannot assign to 'id' because it is a read-only property. |
| `trouverParId(LIVRES, 99).titre` | TS2532 : Object is possibly 'undefined'. |
| `mettreAJour(LIVRES[0], { id: 9 })` | TS2353 : 'id' does not exist in type 'Partial<NouveauLivre>' |
| `private readonly livres` dans livre-list | TS2341 : Property 'livres' is private … |
| `{{ livre.titr }}` | TS2551 : Property 'titr' does not exist on type 'Livre'. Did you mean 'titre'? |
