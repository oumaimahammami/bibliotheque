import { LIVRES } from '../data/livres.data';
import { mettreAJour, trouverParId } from './livre.utils';

describe('livre.utils', () => {
  it('trouverParId', () => {
    expect(trouverParId(LIVRES, 3)?.titre).toBe('Clean Code');
    expect(trouverParId(LIVRES, 99)).toBeUndefined();
  });
  it('mettreAJour ne modifie pas l\'original', () => {
    const m = mettreAJour(LIVRES[1], { disponible: false });
    expect(m.disponible).toBe(false);
    expect(LIVRES[1].disponible).toBe(true);
  });
});
