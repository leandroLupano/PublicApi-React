import { beersReducer } from '../../reducer/beers.reducer';
import * as ac from '../../reducer/beers.actions.creator';
import { BeerPrivateRepo } from '../../services/private.repo/privateBeer.api.repo';
import { BeerStructure, ProtoBeerStructure } from '../../models/beer';
import { useCallback, useReducer } from 'react';

export type usePrivateBeersStructure = ReturnType<typeof usePrivateBeers>;

export function usePrivateBeers(repo: BeerPrivateRepo) {
  const initialState: BeerStructure[] = [];

  const [privateBeerList, dispatch] = useReducer(beersReducer, initialState);

  const handleError = (error: Error) => {
    console.log(error.message);
  };

  const loadPrivateBeer = useCallback(async () => {
    try {
      const privateBeerList = await repo.loadPrivateBeer();
      dispatch(ac.loadBeersCreator(privateBeerList));
    } catch (error) {
      handleError(error as Error);
    }
  }, [repo]);

  const createBeer = async (beer: ProtoBeerStructure) => {
    try {
      const finalBeer = await repo.createBeer(beer);
      dispatch(ac.addBeersCreator(finalBeer));
    } catch (error) {
      handleError(error as Error);
    }
  };

  const deleteBeer = async (id: BeerStructure['id']) => {
    try {
      await repo.deleteBeer(id);
      dispatch(ac.deleteBeersCreator(id));
    } catch (error) {
      handleError(error as Error);
    }
  };

  const editBeer = async (beer: BeerStructure) => {
    try {
      const finalBeer = await repo.editBeer(beer);
      dispatch(ac.updateBeersCreator(finalBeer));
    } catch (error) {
      handleError(error as Error);
    }
  };

  return {
    privateBeerList,
    loadPrivateBeer,
    createBeer,
    deleteBeer,
    editBeer,
  };
}
