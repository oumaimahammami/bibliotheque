// Exercice 3 — données typées
import { Livre } from '../models/livre.model';
import { Emprunt } from '../models/emprunt.model';

export const LIVRES: Livre[] = [
  { id: 1, titre: 'Nedjma', auteur: 'Kateb Yacine', annee: 1956, genre: 'Roman', disponible: false,
    resume: 'Quatre jeunes hommes et une femme insaisissable.' },
  { id: 2, titre: 'L\'Étranger', auteur: 'Albert Camus', annee: 1942, genre: 'Roman', disponible: true },
  { id: 3, titre: 'Clean Code', auteur: 'Robert C. Martin', annee: 2008, genre: 'Informatique', disponible: false },
  { id: 4, titre: 'Le Petit Prince', auteur: 'Antoine de Saint-Exupéry', annee: 1943, genre: 'Conte', disponible: true },
];

export const EMPRUNTS: Emprunt[] = [
  { id: 1, livreId: 1, emprunteur: 'Amira', statut: 'EN_RETARD' },
  { id: 2, livreId: 3, emprunteur: 'Youssef', statut: 'EN_COURS' }, 
  { id: 3, livreId: 2, emprunteur: 'Amira', statut: 'RENDU', dateRetour: new Date('2026-10-20') },
];

