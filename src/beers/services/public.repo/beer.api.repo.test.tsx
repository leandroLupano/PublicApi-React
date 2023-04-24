import { BeerApiRepo } from './beer.api.repo';

describe('Given there BeerApiRepo class', () => {
  describe('When we instance the class with new BeerApiRepo', () => {
    let repo: BeerApiRepo;

    beforeEach(() => {
      repo = new BeerApiRepo();
    });

    test('Then if we call the loadBeer() method, the result should be equal to the mock value', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue([]),
      });

      const result = await repo.loadPublicBeers(0);
      expect(result).toEqual([]);
    });

    test('Then if we call the loadBeer() method, with pageChange (-1) the result should be equal to the mock value', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue([]),
      });

      const result = await repo.loadPublicBeers(-1);
      expect(result).toEqual([]);
    });

    test('Then if we call the getBeer() method, the result should be equal to the mock value', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue({
          name: '',
        }),
      });

      const result = await repo.getPublicBeer(1);
      expect(result).toEqual({ name: '' });
    });
  });
});
