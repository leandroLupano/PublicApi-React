import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PrivateBeersContext } from '../../../context/private.beer.context';
// import DetailsPage from '../../../details/page/details';
import { BeerStructure } from '../../../models/beer';
import './main.card.scss';

type MainCardProps = {
  beer: BeerStructure;
};

export function MainCard({ beer }: MainCardProps) {
  const { createBeer } = useContext(PrivateBeersContext);

  const handlerAddButton = (beer: BeerStructure) => {
    createBeer(beer);
  };

  // const handlerDetailButton = (beer: BeerStructure) => {
  //   return <DetailsPage detailBeer={beer}></DetailsPage>;
  // };

  return (
    <li className="main-card">
      <div className="info">
        <Link to={`/details/${beer.id}`}>
          <img src={beer.image_url} alt={beer.name} />
        </Link>
        <p className="info__name">{beer.name}</p>
        <p className="info__ibu">IBU: {beer.ibu}</p>
      </div>
      <button
        className="add-button"
        onClick={() => {
          handlerAddButton(beer);
        }}
      >
        <img src="img/add-icon.png" alt="Add button" />
      </button>
    </li>
  );
}
