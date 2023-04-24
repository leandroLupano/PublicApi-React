import { useMemo } from 'react';
import { usePrivateBeers } from '../hooks/hook.private/use.private.beers';
import { BeerPrivateRepo } from '../services/private.repo/privateBeer.api.repo';
import { PrivateBeersContext } from './private.beer.context';

export function PrivateBeersContextProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const privateBeerListRepo = useMemo(() => new BeerPrivateRepo(), []);

  const privateContext = { ...usePrivateBeers(privateBeerListRepo) };

  return (
    <PrivateBeersContext.Provider value={privateContext}>
      {children}
    </PrivateBeersContext.Provider>
  );
}
