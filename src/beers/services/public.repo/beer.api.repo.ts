import { BeerStructure } from '../../models/beer';

export interface BeerApiRepoStructure {
  loadBeers(): Promise<BeerStructure[]>;
  getBeer(id: BeerStructure['id']): Promise<BeerStructure>;
}

export class BeerApiRepo {
  url: string;
  actualPage: number;

  constructor() {
    this.url = 'https://api.punkapi.com/v2/beers';
    this.actualPage = 1;
  }

  async loadPublicBeers(
    pageChange: number,
    malt?: string
  ): Promise<BeerStructure[]> {
    const defaultPage = '?page=';
    const beersPerPage = '&per_page=20';

    this.actualPage = this.actualPage + pageChange;

    if (malt === undefined) malt = '';

    if (this.actualPage === 0) this.actualPage = 1;

    const pageNumber = this.actualPage.toString();

    const url = this.url + defaultPage + pageNumber + beersPerPage + malt;

    console.log(url);
    const response = await fetch(url);
    const beerList = (await response.json()) as BeerStructure[];
    console.log(beerList);
    return beerList;
  }

  async getPublicBeer(id: BeerStructure['id']): Promise<BeerStructure> {
    const url = this.url + '/' + id;
    const response = await fetch(url);
    const beerInfo = (await response.json()) as BeerStructure;
    console.log(beerInfo);
    return beerInfo;
  }
}
