import { useContext } from 'react';
import { PrivateBeersContext } from '../context/private.beer.context';
import { BeerStructure } from '../models/beer';
import { Link } from 'react-router-dom';
import './detailsCard.scss';
import Edit from '../edit/page/edit';

type DetailedCardProps = {
  beer: BeerStructure;
};

export function DetailedCard({ beer }: DetailedCardProps) {
  const { deleteBeer } = useContext(PrivateBeersContext);

  const handlerDeleteButton = (id: BeerStructure['id']) => {
    deleteBeer(id);
  };

  const handlerEditButton = (beer: BeerStructure) => {
    return <Edit editBeer={beer}></Edit>;
  };

  return (
    <div className="details-card">
      <div className="info-img">
        <img src={beer.image_url} alt={beer.name} />
        <button
          className="delete-button"
          onClick={() => {
            handlerDeleteButton(beer.id);
          }}
        >
          <img src="img/remove-icon.png" alt="delete button" />
        </button>

        <Link to={'/edit'}>
          <button
            className="edit-button"
            onClick={() => {
              handlerEditButton(beer);
            }}
          >
            Edit
          </button>
        </Link>
      </div>
      <div className="info-text">
        <p className="info-text__name">{beer.name}</p>
        <p className="info-text__abv">ABV: {beer.abv}</p>
        <p className="info-text__ibu">IBU: {beer.ibu}</p>
        <p className="info-text__description">{beer.description}</p>
      </div>
    </div>
  );
}
