// Exercice 3 — union de littéraux et interfaces
export type Genre = 'Roman' | 'Informatique' | 'Conte' | 'Essai';

export interface Livre {
  readonly id: number;
  titre?: string;
  auteur?: string;
  annee?: number;
  genre?: Genre;
  disponible?: boolean;
  resume?: string;
}

// Exercice 4 — type utilitaire : un livre sans id
export type NouveauLivre = Omit<Livre, 'id'>;
