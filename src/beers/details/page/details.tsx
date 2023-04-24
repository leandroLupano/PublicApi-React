import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BeersContext } from '../../context/beers.context';
import './details.scss';

export default function Details() {
  const { id } = useParams();

  const { beerList } = useContext(BeersContext);

  const detailedBeer = beerList.find((item) => item.id.toString() === id);

  //TEMPORAL: Hasta poder resolver el test en el caso que "detailedBeer" no se "undefined"
  if (detailedBeer === undefined) {
    return <>🌀 Loading</>;
  }

  return (
    <>
      <h2 className="main-card-title">Details of {detailedBeer?.name}</h2>
      <div className="details-page">
        <div className="details-page-card">
          <div className="info-img">
            <img src={detailedBeer?.image_url} alt={detailedBeer?.name} />
          </div>
          <div className="info-text">
            <p className="info-text__name">{detailedBeer?.name}</p>
            <p className="info-text__abv">ABV: {detailedBeer?.abv}</p>
            <p className="info-text__ibu">IBU: {detailedBeer?.ibu}</p>
            <p className="info-text__description">
              {detailedBeer?.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
