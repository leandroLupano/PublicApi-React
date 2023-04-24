/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BeerPrivateRepo } from '../../services/private.repo/privateBeer.api.repo';
import { usePrivateBeers } from './use.private.beers';

const beerMock = {
  image_url: 'test',
  name: 'test',
  ibu: 1,
  abv: 1,
  type: 'test',
  description: 'test',
  id: 1,
};

describe('Given the usePrivateBeers custom hook', () => {
  let mockRepo: BeerPrivateRepo;

  beforeEach(async () => {
    mockRepo = {
      loadPrivateBeer: jest.fn(),
      getPrivateBeer: jest.fn(),
      createBeer: jest.fn(),
      deleteBeer: jest.fn(),
      editBeer: jest.fn(),
    } as unknown as BeerPrivateRepo;

    const TestComponent = function () {
      const { loadPrivateBeer, createBeer, deleteBeer, editBeer } =
        usePrivateBeers(mockRepo);

      return (
        <>
          <button onClick={() => loadPrivateBeer()}>Load</button>
          <button onClick={() => createBeer(beerMock)}>Create</button>
          <button onClick={() => deleteBeer(1)}>Delete</button>
          <button onClick={() => editBeer(beerMock)}>Edit</button>
        </>
      );
    };
    await act(async () => render(<TestComponent></TestComponent>));
  });

  describe('When the TestComponent is rendered', () => {
    test('Then, the button should be in the document', async () => {
      const elements = await screen.findAllByRole('button');
      expect(elements[0]).toBeInTheDocument();
    });
  });

  describe('When the TestComponent is rendered and the button is clicked', () => {
    test('Then, the loadPrivateBeers method should be called', async () => {
      const elements = await screen.findAllByRole('button');
      await act(async () => userEvent.click(elements[0]));
      expect(mockRepo.loadPrivateBeer).toHaveBeenCalled();
    });
  });

  describe('When the TestComponent is rendered and the second button is clicked', () => {
    test('Then, the createBeer method should be called', async () => {
      const elements = await screen.findAllByRole('button');
      await act(async () => userEvent.click(elements[1]));
      expect(mockRepo.createBeer).toHaveBeenCalled();
    });
  });

  describe('When the TestComponent is rendered and the third button is clicked', () => {
    test('Then, the deleteBeer method should be called', async () => {
      const elements = await screen.findAllByRole('button');
      await act(async () => userEvent.click(elements[2]));
      expect(mockRepo.deleteBeer).toHaveBeenCalled();
    });
  });

  describe('When the TestComponent is rendered and the fourth button is clicked', () => {
    test('Then, the editBeer method should be called', async () => {
      const elements = await screen.findAllByRole('button');
      await act(async () => userEvent.click(elements[3]));
      expect(mockRepo.editBeer).toHaveBeenCalled();
    });
  });
});

describe('Given the usePrivateBeers Custom Hook and TestError component', () => {
  let spyLog: jest.SpyInstance;
  beforeEach(async () => {
    spyLog = jest.spyOn(global.console, 'log');

    const mockRepoError = {
      loadPrivateBeer: jest.fn().mockRejectedValue(new Error('Test Error')),
      getPrivateBeer: jest.fn().mockRejectedValue(new Error('Test Error')),
      createBeer: jest.fn().mockRejectedValue(new Error('Test Error')),
      deleteBeer: jest.fn().mockRejectedValue(new Error('Test Error')),
      editBeer: jest.fn().mockRejectedValue(new Error('Test Error')),
    } as unknown as BeerPrivateRepo;

    const TestError = function () {
      const { loadPrivateBeer, createBeer, deleteBeer, editBeer } =
        usePrivateBeers(mockRepoError);

      return (
        <>
          <button onClick={() => loadPrivateBeer()}>Error</button>
          <button onClick={() => createBeer(beerMock)}>Error</button>
          <button onClick={() => deleteBeer(1)}>Error</button>
          <button onClick={() => editBeer(beerMock)}>Error</button>
        </>
      );
    };

    await act(async () => render(<TestError></TestError>));
  });

  describe('When the TestError is rendered and the first button is clicked', () => {
    test('Then, the loadPrivateBeers function should be catch the error', async () => {
      const elements = await screen.findAllByRole('button');
      await act(async () => userEvent.click(elements[0]));
      expect(spyLog).toHaveBeenCalled();
    });
  });

  describe('When the TestError is rendered and the second button is clicked', () => {
    test('Then, the createBeers function should be catch the error', async () => {
      const elements = await screen.findAllByRole('button');
      await act(async () => userEvent.click(elements[1]));
      expect(spyLog).toHaveBeenCalled();
    });
  });

  describe('When the TestError is rendered and the third button is clicked', () => {
    test('Then, the deleteBeers function should be catch the error', async () => {
      const elements = await screen.findAllByRole('button');
      await act(async () => userEvent.click(elements[2]));
      expect(spyLog).toHaveBeenCalled();
    });
  });

  describe('When the TestError is rendered and the four button is clicked', () => {
    test('Then, the editBeers function should be catch the error', async () => {
      const elements = await screen.findAllByRole('button');
      await act(async () => userEvent.click(elements[3]));
      expect(spyLog).toHaveBeenCalled();
    });
  });
});
