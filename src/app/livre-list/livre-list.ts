// Exercice 6 — liste typée
import { Component } from '@angular/core';
import { Livre } from '../models/livre.model';
import { LIVRES } from '../data/livres.data';

@Component({
  selector: 'app-livre-list',
  templateUrl: './livre-list.html',
  styleUrl: './livre-list.css'
})
export class LivreList {
  protected readonly livres: Livre[] = LIVRES;

  protected get nbDisponibles(): number {
    return this.livres.filter(l => l.disponible).length;
  }
}
