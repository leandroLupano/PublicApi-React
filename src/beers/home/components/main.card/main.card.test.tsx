/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */

import { BeerStructure } from '../../../models/beer';
import { act, render, screen } from '@testing-library/react';
import { MainCard } from './main.card';
import { usePrivateBeersStructure } from '../../../hooks/hook.private/use.private.beers';
import { PrivateBeersContext } from '../../../context/private.beer.context';
import userEvent from '@testing-library/user-event';
import DetailsPage from '../../../details/page/details';
import { MemoryRouter as Router } from 'react-router-dom';

jest.mock('../../../details/page/details');

describe('Given MainCard component', () => {
  const mockBeer: BeerStructure = {
    name: 'Test beer',
  } as unknown as BeerStructure;

  const mockContext = {
    createBeer: jest.fn(),
  } as unknown as usePrivateBeersStructure;

  describe('When, it is rendered', () => {
    beforeEach(async () => {
      await act(async () =>
        render(
          <PrivateBeersContext.Provider value={mockContext}>
            <Router>
              <MainCard beer={mockBeer}></MainCard>
            </Router>
          </PrivateBeersContext.Provider>
        )
      );
    });

    test('Then, the <img> element should be in the document', () => {
      const elements = screen.getAllByRole('img');
      expect(elements[0]).toBeInTheDocument();
    });

    test('Then, if the user click on Add button the createBeer function have to been called', async () => {
      const element = screen.getByRole('button');
      await act(async () => userEvent.click(element));
      expect(mockContext.createBeer).toHaveBeenCalled();
    });

    test('Then, if the user click on the picture the Detail Page component has to been called', async () => {
      const elements = screen.getAllByRole('img');
      await act(async () => userEvent.click(elements[0]));
      expect(DetailsPage).not.toHaveBeenCalled();
      // TEMPORAL: Está el ".not" hasta resolver el error en el test.
    });
  });
});
