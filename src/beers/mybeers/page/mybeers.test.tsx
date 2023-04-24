/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import { act, render } from '@testing-library/react';
import { PrivateBeersContext } from '../../context/private.beer.context';
import { DetailedCard } from '../../detailsCard/detailsCard';
import { usePrivateBeersStructure } from '../../hooks/hook.private/use.private.beers';
import MyBeers from './mybeers';

jest.mock('../../detailsCard/detailsCard');

const mockContext = {
  loadPrivateBeer: jest.fn(),
  privateBeerList: [
    { name: 'test', id: 1 },
    { name: 'test', id: 2 },
  ],
} as unknown as usePrivateBeersStructure;

describe('Given MyBeers component', () => {
  describe('When it is render', () => {
    beforeEach(async () => {
      await act(async () =>
        render(
          <PrivateBeersContext.Provider value={mockContext}>
            <MyBeers />
          </PrivateBeersContext.Provider>
        )
      );
    });

    test('Then it should have the My Beers in the screen', () => {
      expect(DetailedCard).toHaveBeenCalled();
    });
  });
});
