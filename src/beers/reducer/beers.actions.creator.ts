import { BeerStructure } from '../models/beer';
import { beersActions } from './beers.actions';

export interface Action {
  type: string;
  payload?: any;
}

export interface BeersAction extends Action {
  payload: BeerStructure | BeerStructure[] | BeerStructure['id'];
}

export const loadBeersCreator = (payload: BeerStructure[]): BeersAction => {
  return {
    type: beersActions.load,
    payload,
  };
};

export const addBeersCreator = (payload: BeerStructure) => {
  return {
    type: beersActions.add,
    payload,
  };
};

export const updateBeersCreator = (payload: BeerStructure) => {
  return {
    type: beersActions.update,
    payload,
  };
};

export const deleteBeersCreator = (payload: BeerStructure['id']) => {
  return {
    type: beersActions.delete,
    payload,
  };
};
