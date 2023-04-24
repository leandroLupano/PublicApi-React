import { BeerStructure, ProtoBeerStructure } from '../../models/beer';

export class BeerPrivateRepo {
  url: string;
  constructor() {
    this.url = 'http://localhost:5050/beers';
  }

  async loadPrivateBeer(): Promise<BeerStructure[]> {
    const resp = await fetch(this.url);
    const privateBeerList = (await resp.json()) as BeerStructure[];
    return privateBeerList;
  }

  async getPrivateBeer(id: BeerStructure['id']): Promise<BeerStructure> {
    const url = this.url + '/' + id;
    const resp = await fetch(url);
    const privateBeerInfo = (await resp.json()) as BeerStructure;
    return privateBeerInfo;
  }

  async createBeer(beer: ProtoBeerStructure): Promise<BeerStructure> {
    const resp = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(beer),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const privateBeerInfo = (await resp.json()) as BeerStructure;
    return privateBeerInfo;
  }

  async editBeer(beer: Partial<BeerStructure>): Promise<BeerStructure> {
    const url = this.url + '/' + beer.id;
    const resp = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(beer),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const privateBeerInfo = (await resp.json()) as BeerStructure;
    return privateBeerInfo;
  }

  async deleteBeer(id: BeerStructure['id']): Promise<void> {
    const url = this.url + '/' + id;
    const resp = await fetch(url, {
      method: 'DELETE',
    });
    if (!resp.ok) throw new Error('Delete was not possible!');
  }
}
