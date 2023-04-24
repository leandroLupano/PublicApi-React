import './form.scss';
import { SyntheticEvent, useContext, useState } from 'react';
import { PrivateBeersContext } from '../context/private.beer.context';
import { ToCreateBeer } from '../models/beer';

export default function AddForm() {
  const { createBeer } = useContext(PrivateBeersContext);
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const inputs = form.querySelectorAll('input');
    const imageUrl = inputs[0].value;
    const name = inputs[1].value;
    const ibu = parseInt(inputs[2].value);
    const abv = parseFloat(inputs[3].value);
    const type = inputs[4].value;
    const description = inputs[5].value;

    const newBeer = new ToCreateBeer(
      imageUrl,
      name,
      ibu,
      abv,
      type,
      description
    );

    createBeer(newBeer);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <>
      <div className="container">
        <div className="form-container">
          {showMessage && <div className="success-message">Beer added!</div>}
          <form className="add" onSubmit={handleSubmit}>
            <input
              type="text"
              name="image_url"
              placeholder="image_url"
              required
            />
            <input type="text" name="beerName" placeholder="Name" required />
            <input type="number" name="ibu" placeholder="IBU" required />
            <input
              type="number"
              step="0.1"
              name="abv"
              placeholder="ABV"
              required
            />
            <input type="text" name="beerType" placeholder="Type" required />
            <input
              type="text"
              name="beerDescription"
              placeholder="Description"
              required
            />
            <button type="submit">Create!</button>
          </form>
        </div>
      </div>
    </>
  );
}
