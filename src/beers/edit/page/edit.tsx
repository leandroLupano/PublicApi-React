import { BeerStructure } from '../../models/beer';
import './edit.scss';

type EditProps = {
  editBeer: BeerStructure | any;
};
export default function Edit({ editBeer }: EditProps) {
  return (
    <>
      <h2 className="edit-main-title">My Beers - Edit</h2>;
    </>
  );
}
