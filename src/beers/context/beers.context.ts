import { createContext } from 'react';
import { UseBeersStructure } from '../hooks/hook.public/use.beers';

export const BeersContext = createContext({} as UseBeersStructure);
