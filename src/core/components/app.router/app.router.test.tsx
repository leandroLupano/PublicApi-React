/* eslint-disable testing-library/no-unnecessary-act */
import { MemoryRouter as Router } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { MenuOption } from '../app/App';
import { AppRouter } from './app.router';
import '@testing-library/jest-dom';
import { UseBeersStructure } from '../../../beers/hooks/hook.public/use.beers';
import { BeersContext } from '../../../beers/context/beers.context';
import { PrivateBeersContext } from '../../../beers/context/private.beer.context';
import { usePrivateBeersStructure } from '../../../beers/hooks/hook.private/use.private.beers';

describe('Given AppRouter component', () => {
  const mockOptions: MenuOption[] = [
    { label: 'Home', path: '/home' },
    {
      label: 'My Beers',
      path: '/mybeers',
    },
    {
      label: 'About',
      path: '/about',
    },
    {
      label: 'Details',
      path: '/details',
    },
    {
      label: 'Edit',
      path: '/edit',
    },
    {
      label: 'Create',
      path: '/create',
    },
  ];

  const mockContext = {
    loadBeers: jest.fn(),
    beerList: [
      { name: 'test', id: 1 },
      { name: 'test', id: 2 },
    ],
  } as unknown as UseBeersStructure;

  const mockPrivateContext = {
    loadPrivateBeer: jest.fn(),
    privateBeerList: [
      { name: 'test', id: 1 },
      { name: 'test', id: 2 },
    ],
  } as unknown as usePrivateBeersStructure;

  const prepareTestFunction = (number: number) => {
    render(
      <BeersContext.Provider value={mockContext}>
        <PrivateBeersContext.Provider value={mockPrivateContext}>
          <Router
            initialEntries={[
              '/home',
              '/about',
              '/details/1',
              '/anyText',
              '/mybeers',
              '/edit',
              '/create',
            ]}
            initialIndex={number}
          >
            <AppRouter menuOptions={mockOptions}></AppRouter>
          </Router>
        </PrivateBeersContext.Provider>
      </BeersContext.Provider>
    );
  };

  describe('When it is render and the path is "/home"', () => {
    test('Then, the title "Discover" of Home Page should be in the screen', async () => {
      await waitFor(async () => prepareTestFunction(0));
      const element = await screen.findByRole('heading', { name: 'Discover' });
      expect(element).toBeInTheDocument();
    });
  });

  describe('When it is render and the path is "/about"', () => {
    test('Then, the title "About us" of About page  should be in the screen', async () => {
      await waitFor(async () => prepareTestFunction(1));
      const element = await screen.findByRole('heading', {
        name: 'About us',
      });
      expect(element).toBeInTheDocument();
    });
  });

  describe('When it is render the Details page', () => {
    test('Then, it should render the Details component', async () => {
      await waitFor(async () => prepareTestFunction(2));
      const element = await screen.findByText('Details of test');
      expect(element).toBeInTheDocument();
    });
  });

  describe('When it is render the Error page', () => {
    test('Then, it should render the Error component', async () => {
      await waitFor(async () => prepareTestFunction(3));
      const element = await screen.findByText(/404/i);
      expect(element).toBeInTheDocument();
    });
  });

  describe('When it is render and the path is "/mybeers"', () => {
    test('Then, the title "My Beers" of My Beers Page should be in the screen', async () => {
      await waitFor(async () => prepareTestFunction(4));
      const element = await screen.findByRole('heading', {
        name: 'My Beers',
      });
      expect(element).toBeInTheDocument();
    });
  });

  describe('When it is render the Edit page', () => {
    test('Then, it should render the Edit component', async () => {
      await waitFor(async () => prepareTestFunction(5));
      const element = await screen.findByText(/Edit/i);
      expect(element).toBeInTheDocument();
    });
  });

  describe('When it is render the Create page', () => {
    test('Then, it should render the Create component', async () => {
      await waitFor(async () => prepareTestFunction(6));
      const element = await screen.findByText(/Add/i);
      expect(element).toBeInTheDocument();
    });
  });
});
