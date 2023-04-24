import { AppRouter } from '../app.router/app.router';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Menu } from '../menu/menu';

export type MenuOption = {
  label: string;
  path: string;
};

const menuOptions: MenuOption[] = [
  { label: 'Home', path: '/home' },
  { label: 'My Beers', path: '/mybeers' },
  { label: 'About us', path: '/about' },
];

function App() {
  return (
    <div className="App">
        <Header>
          <Menu menuOptions={menuOptions}></Menu>
        </Header>
      <AppRouter menuOptions={menuOptions}></AppRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
