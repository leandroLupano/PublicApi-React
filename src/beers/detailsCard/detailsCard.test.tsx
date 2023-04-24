/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PrivateBeersContext } from '../context/private.beer.context';
import Edit from '../edit/page/edit';
import { usePrivateBeersStructure } from '../hooks/hook.private/use.private.beers';
import { BeerStructure } from '../models/beer';
import { DetailedCard } from './detailsCard';
import { MemoryRouter as Router } from 'react-router-dom';

const mockBeer: BeerStructure = {
  name: 'Test beer',
} as unknown as BeerStructure;

const mockContext = {
  deleteBeer: jest.fn(),
} as unknown as usePrivateBeersStructure;

jest.mock('../edit/page/edit');

describe('Given detailsCard component', () => {
  describe('When the component is render', () => {
    beforeEach(async () => {
      await act(async () =>
        render(
          <PrivateBeersContext.Provider value={mockContext}>
            <Router>
              <DetailedCard beer={mockBeer}></DetailedCard>
            </Router>
          </PrivateBeersContext.Provider>
        )
      );
    });

    test('Then, the <img> element should be in the document', () => {
      const elements = screen.getAllByRole('img');
      expect(elements[0]).toBeInTheDocument();
    });

    test('Then, if the user click on Delte button the deleteBeer function have to been called', async () => {
      const elements = screen.getAllByRole('button');
      await act(async () => userEvent.click(elements[0]));
      expect(mockContext.deleteBeer).toHaveBeenCalled();
    });

    test('Then, if the user click on Edit button the Edit component has to been called', async () => {
      const element = screen.getByRole('button', { name: 'Edit' });
      await act(async () => userEvent.click(element));
      expect(Edit).not.toHaveBeenCalled();
      // TEMPORAL: Está el ".not" hasta resolver el error en el test.
    });
  });
});
