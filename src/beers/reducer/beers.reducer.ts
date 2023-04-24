import { BeerStructure } from '../models/beer';
import { beersActions } from './beers.actions';
import { BeersAction } from './beers.actions.creator';

export function beersReducer(
  state: BeerStructure[],
  action: BeersAction
): BeerStructure[] {
  switch (action.type) {
    case beersActions.load:
      return action.payload as BeerStructure[];

    case beersActions.add:
      return [...state, action.payload as BeerStructure];

    case beersActions.update:
      const payload = action.payload as BeerStructure;
      return state.map((item) => (item.id === payload.id ? payload : item));

    case beersActions.delete:
      const id = action.payload as BeerStructure['id'];
      return state.filter((item) => item.id !== id);

    default:
      return state;
  }
}
