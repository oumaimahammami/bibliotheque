// Exercice 3
export type StatutEmprunt = 'EN_COURS' | 'RENDU' | 'EN_RETARD';

export interface Emprunt {
  readonly id: number;
  livreId: number;
  emprunteur: string;
  statut: StatutEmprunt;
  dateRetour?: Date;
}
