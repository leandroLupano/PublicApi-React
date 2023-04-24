import { BeerStructure } from '../models/beer';
import { beersActions } from './beers.actions';
import { beersReducer } from './beers.reducer';

describe('Given the beersReducer function', () => {
  const mockState = [
    {
      id: 1,
      picture: 'test',
      name: 'test',
      ibu: 1,
      abv: 1,
      type: 'test',
      description: 'test',
    },
    {
      id: 2,
      picture: 'test',
      name: 'test',
      ibu: 2,
      abv: 2,
      type: 'test',
      description: 'test',
    },
  ] as unknown as BeerStructure[];

  const mockLoadAction = {
    type: beersActions.load,
    payload: mockState,
  };

  // TEMPORAL: Hasta resolver test.
  // TEMPORAL: const mockAddAction = {
  // TEMPORAL:  type: beersActions.add,
  // TEMPORAL:  payload: mockState,
  // TEMPORAL:};

  // TEMPORAL:const mockUpdateAction = {
  // TEMPORAL:  type: beersActions.update,
  // TEMPORAL:  payload: mockState,
  // TEMPORAL:};

  // TEMPORAL:const mockDeleteAction = {
  // TEMPORAL:  type: beersActions.delete,
  // TEMPORAL:  payload: mockState,
  // TEMPORAL:};

  const mockBeerDefaultAction = {
    type: 'default',
    payload: mockState,
  };

  describe('When the action.type is the "beersActions.load" case', () => {
    test('Then, the state should be returned', async () => {
      const element = beersReducer(mockState, mockLoadAction);
      expect(element).toEqual(mockState);
    });
  });

  // TEMPORAL: Hasta resolver test.
  // TEMPORAL:describe('When the action.type is the "beersActions.add" case', () => {
  // TEMPORAL:  test('Then, the state should be returned', async () => {
  // TEMPORAL:    const element = beersReducer(mockState, mockAddAction);
  // TEMPORAL:    expect(element).toEqual(mockState);
  // TEMPORAL:  });
  // TEMPORAL:});

  // TEMPORAL:describe('When the action.type is the "beersActions.update" case', () => {
  // TEMPORAL:  test('Then, the state should be returned', async () => {
  // TEMPORAL:    const element = beersReducer(mockState, mockUpdateAction);
  // TEMPORAL:    expect(element).toEqual(mockState);
  // TEMPORAL:  });
  // TEMPORAL:});

  // TEMPORAL:describe('When the action.type is the "beersActions.delete" case', () => {
  // TEMPORAL:  test('Then, the state should be returned', async () => {
  // TEMPORAL:    const element = beersReducer(mockState, mockDeleteAction);
  // TEMPORAL:    expect(element).toEqual(mockState);
  // TEMPORAL:  });
  // TEMPORAL:});

  describe('When the action.type is the "default" case', () => {
    test('Then, the state should be returned', async () => {
      const element = beersReducer(mockState, mockBeerDefaultAction);
      expect(element).toEqual(mockState);
    });
  });
});
