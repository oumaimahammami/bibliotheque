// Exercice 7 (bonus) — emprunts
import { Component } from '@angular/core';
import { Emprunt, StatutEmprunt } from '../models/emprunt.model';
import { EMPRUNTS, LIVRES } from '../data/livres.data';
import { trouverParId } from '../utils/livre.utils';

@Component({
  selector: 'app-emprunt-list',
  templateUrl: './emprunt-list.html',
  styleUrl: './emprunt-list.css'
})
export class EmpruntList {
  protected readonly emprunts: Emprunt[] = EMPRUNTS;

  protected readonly libelles: Record<StatutEmprunt, string> = {
    EN_COURS: 'En cours',
    RENDU: 'Rendu',
    EN_RETARD: 'En retard',
  };

  protected titreLivre(id: number): string {
    return trouverParId(LIVRES, id)?.titre ?? 'Livre inconnu';
  }
}
