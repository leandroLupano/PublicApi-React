import { HomeBeerList } from '../components/home.beer.list/home.beer.list';
import './home.scss';

export default function HomePage() {
  return (
    <section className="home-page">
      <h2>Discover</h2>
      <div className="home-page-list">
        <HomeBeerList></HomeBeerList>
      </div>
    </section>
  );
}
