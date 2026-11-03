import { Livre, NouveauLivre } from '../models/livre.model';

// Exercice 4 — fonction générique avec contrainte
export function trouverParId<T extends { id: number }>(elements: T[], id: number): T | undefined {
  return elements.find(e => e.id === id);
}

// Exercice 4 — Partial : modification partielle (l'id est exclu par NouveauLivre)
export function mettreAJour(livre: Livre, changements: Partial<NouveauLivre>): Livre {
  return { ...livre, ...changements };
}
