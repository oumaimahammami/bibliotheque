// Exercice 5 — composant typé
import { Component } from '@angular/core';
import { Livre } from '../models/livre.model';
import { LIVRES } from '../data/livres.data';
import { mettreAJour } from '../utils/livre.utils';

@Component({
  selector: 'app-livre-card',
  templateUrl: './livre-card.html',
  styleUrl: './livre-card.css'
})
export class LivreCard {
  protected livre: Livre = { ...LIVRES[1] };

  protected changerEtat(): void {
    this.livre = mettreAJour(this.livre, { disponible: !this.livre.disponible });
  }
}
