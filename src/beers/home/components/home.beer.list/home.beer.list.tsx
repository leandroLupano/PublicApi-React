import { useContext, useEffect } from 'react';
import { BeersContext } from '../../../context/beers.context';
import { BeerStructure } from '../../../models/beer';
import FilterButtons from '../filter/filter';
import { MainCard } from '../main.card/main.card';
import './home.beer.list.scss';

export function HomeBeerList() {
  const { beerList, loadBeers } = useContext(BeersContext);

  useEffect(() => {
    loadBeers();
  }, [loadBeers]);

  const handlerPrevButton = (pageChange: number) => {
    loadBeers(pageChange);
  };

  return (
    <>
      <div className="home-page-list-filter">
        <FilterButtons></FilterButtons>
      </div>
      <div className="home-page-list-cards">
        <ul>
          {beerList.map((item: BeerStructure) => (
            <MainCard key={item.id} beer={item}></MainCard>
          ))}
        </ul>
      </div>
      <div className="home-page-list-next-prev-button">
        <button
          className="prev-button"
          onClick={() => {
            handlerPrevButton(-1);
          }}
        >
          <img src="img/previous-button.png" alt="Previous button" />
        </button>
        <button
          className="next-button"
          onClick={() => {
            handlerPrevButton(+1);
          }}
        >
          <img src="img/next-button.png" alt="Next button" />
        </button>
      </div>
    </>
  );
}
