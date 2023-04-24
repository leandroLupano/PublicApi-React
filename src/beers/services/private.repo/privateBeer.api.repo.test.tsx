/* eslint-disable jest/no-conditional-expect */
import { BeerStructure } from '../../models/beer';
import { BeerPrivateRepo } from './privateBeer.api.repo';

describe('Given the BeerPrivateRepo class', () => {
  describe('When we instance the methods with the new Parameter', () => {
    let repo: BeerPrivateRepo;

    beforeEach(() => {
      repo = new BeerPrivateRepo();
    });

    test('Then if we call the loadPrivateBeer() method, the result should be equal to the mock value', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue([]),
      });

      const result = await repo.loadPrivateBeer();
      expect(result).toEqual([]);
    });

    test('Then if we call the getPrivateBeer() method, the result should be equal to the mock value', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue({
          name: '',
        }),
      });
      const result = await repo.getPrivateBeer(1);
      expect(result).toEqual({ name: '' });
    });

    test("Then if we call the createBeer() method, it should return the new Beer that we've tryied to create", async () => {
      const mock = {};
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(mock),
      });
      const result = await repo.createBeer({} as BeerStructure);
      expect(result).toEqual(mock);
    });
    test("Then if we call the editBeer() method, it should return the new Beer that we've tryied to create", async () => {
      const mock = {
        picture: 'xd',
        name: "Paco's beer",
        ibu: 5,
        abv: 2,
        type: 'Red',
        description: 'La mejor cerveza',
      };
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(mock),
      });
      const result = await repo.editBeer(mock);
      expect(result).toEqual(mock);
    });
    test('Then if we call the deletePrivateBeer() method, it should return a Void value that shows us that we deleted the Beer', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn(),
      });
      await repo.deleteBeer(1);
      expect(global.fetch).toHaveBeenCalled();
    });
    test('Then if we call the deletePrivateBeer() method with a false value in the response, should show an error message', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        json: jest.fn(),
      });
      try {
        await repo.deleteBeer(1);
      } catch (error) {
        expect((error as Error).message).toBe('Delete was not possible!');
      }
    });
  });
});
