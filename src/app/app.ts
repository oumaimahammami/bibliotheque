// TP 1 — composant racine (exercices 2 à 7)
import { Component } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { LivreCard } from './livre-card/livre-card';
import { LivreList } from './livre-list/livre-list';
import { EmpruntList } from './emprunt-list/emprunt-list';
import { LIVRES } from './data/livres.data';
import { mettreAJour, trouverParId } from './utils/livre.utils';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, LivreCard, LivreList, EmpruntList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly nomBibliotheque: string = 'Bibliothèque de l\'ESEN';
  protected readonly annee: number = 2026;

  constructor() {
    // Exercice 4 — tests dans la console (F12)
    console.log(trouverParId(LIVRES, 3)?.titre);                       // Clean Code
    console.log(trouverParId(LIVRES, 99)?.titre ?? 'introuvable');     // introuvable
    const modifie = mettreAJour(LIVRES[1], { disponible: false });
    console.log(modifie.disponible, LIVRES[1].disponible);             // false true
  }
}
