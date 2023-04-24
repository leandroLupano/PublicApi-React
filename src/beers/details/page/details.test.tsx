/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { act, render, screen } from '@testing-library/react';
import { BeersContext } from '../../context/beers.context';
import { UseBeersStructure } from '../../hooks/hook.public/use.beers';
import Details from './details';
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';

const mockContext = {
  beerList: [
    { name: 'test', id: 1 },
    { name: 'test', id: 2 },
  ],
} as unknown as UseBeersStructure;

describe('Given Details page component', () => {
  describe('When we render the component', () => {
    test('Then, the heading <h2> "Details of " should be in the document', async () => {
      await act(async () =>
        render(
          <BeersContext.Provider value={mockContext}>
            <Router
              initialEntries={['/details/1', '/details/3']}
              initialIndex={0}
            >
              <Routes>
                <Route
                  path="/details/:id"
                  element={<Details></Details>}
                ></Route>
              </Routes>
            </Router>
          </BeersContext.Provider>
        )
      );

      const element = screen.getByRole('heading');

      expect(element).toBeInTheDocument();
    });
  });

  describe('When we render the component with the second route', () => {
    test('Then, the "Loading" text should be in the document', async () => {
      await act(async () =>
        render(
          <BeersContext.Provider value={mockContext}>
            <Router
              initialEntries={['/details/1', '/details/3']}
              initialIndex={1}
            >
              <Routes>
                <Route
                  path="/details/:id"
                  element={<Details></Details>}
                ></Route>
              </Routes>
            </Router>
          </BeersContext.Provider>
        )
      );

      const element = screen.getByText('🌀 Loading');

      expect(element).toBeInTheDocument();
    });
  });
});
