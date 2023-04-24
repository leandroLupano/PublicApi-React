import { SyntheticEvent, useContext, useEffect } from 'react';
import { BeersContext } from '../../../context/beers.context';
import './filter.scss';

export default function FilterButtons() {
  const { loadBeers } = useContext(BeersContext);
  const handleClick = (ev: SyntheticEvent) => {
    const element = ev.target as HTMLButtonElement;
    const filterValue = '&malt=' + element.value;

    console.log(filterValue);
    loadBeers(0, filterValue);
  };

  useEffect(() => {}, [loadBeers]);

  return (
    <div className="filter-buttons">
      <button className="pilsner" value="pilsner" onClick={handleClick}>
        Pilsner
      </button>
      <button className="pale" value="pale" onClick={handleClick}>
        Pale
      </button>
      <button className="extra_pale" value="extra_pale" onClick={handleClick}>
        Extra Pale
      </button>
    </div>
  );
}
