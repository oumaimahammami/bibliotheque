import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
  });

  it('crée l\'application', () => {
    expect(TestBed.createComponent(App).componentInstance).toBeTruthy();
  });

  it('affiche le nom de la bibliothèque et trois cartes', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h1')?.textContent).toContain('Bibliothèque de l\'ESEN');
    expect(el.querySelectorAll('app-livre-card').length).toBe(3);
  });

  it('chaque carte change d\'état indépendamment', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    (el.querySelector('app-livre-card button') as HTMLButtonElement).click();
    fixture.detectChanges();
    await fixture.whenStable();
    const badges = Array.from(el.querySelectorAll('app-livre-card .badge')).map(b => b.textContent?.trim());
    expect(badges).toEqual(['Emprunté', 'Disponible', 'Disponible']);
  });
});
