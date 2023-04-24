import { useMemo } from 'react';
import { useBeers } from '../hooks/hook.public/use.beers';
import { BeerApiRepo } from '../services/public.repo/beer.api.repo';
import { BeersContext } from './beers.context';

export function BeersContextProvider({ children }: { children: JSX.Element }) {
  const beerListRepo = useMemo(() => new BeerApiRepo(), []);

  const context = { ...useBeers(beerListRepo) };

  return (
    <BeersContext.Provider value={context}>{children}</BeersContext.Provider>
  );
}
