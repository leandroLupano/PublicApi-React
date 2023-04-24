import { createContext } from 'react';
import { usePrivateBeersStructure } from '../hooks/hook.private/use.private.beers';

export const PrivateBeersContext = createContext(
  {} as usePrivateBeersStructure
);
