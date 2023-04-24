/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BeersContext } from '../../../context/beers.context';
import { UseBeersStructure } from '../../../hooks/hook.public/use.beers';
import { MainCard } from '../main.card/main.card';
import { HomeBeerList } from './home.beer.list';

jest.mock('../main.card/main.card');

const mockContext = {
  loadBeers: jest.fn(),
  beerList: [
    { name: 'test', id: 1 },
    { name: 'test', id: 2 },
  ],
} as unknown as UseBeersStructure;

describe('Given, HomeBeerList component', () => {
  describe('When, it is render', () => {
    let elements: HTMLElement[];

    beforeEach(async () => {
      await act(async () =>
        render(
          <BeersContext.Provider value={mockContext}>
            <HomeBeerList />
          </BeersContext.Provider>
        )
      );

      elements = screen.getAllByRole('button');
    });

    test('Then, the MainCard component should be call', async () => {
      expect(MainCard).toHaveBeenCalled();
    });

    test('Then, if the user click on Prev-Button the loadBeer function have to been called', async () => {
      expect(elements[0]).toBeInTheDocument();

      userEvent.click(elements[0]);
      expect(mockContext.loadBeers).toHaveBeenCalled();
    });

    test('Then, if the user click on Next-Button the loadBeer function have to been called', async () => {
      expect(elements[1]).toBeInTheDocument();

      userEvent.click(elements[1]);
      expect(mockContext.loadBeers).toHaveBeenCalled();
    });
  });
});
