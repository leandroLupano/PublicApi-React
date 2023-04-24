import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MenuOption } from '../app/App';

const Home = lazy(() => import('../../../beers/home/page/home'));
const MyBeers = lazy(() => import('../../../beers/mybeers/page/mybeers'));
const About = lazy(() => import('../../../beers/about/page/about'));
const ErrorPage = lazy(() => import('../../../beers/error/page/error'));
const Details = lazy(() => import('../../../beers/details/page/details'));
const EditPage = lazy(() => import('../../../beers/edit/page/edit'));
const CreatePage = lazy(() => import('../../../beers/create/page/create'));

type AppRouterProps = {
  menuOptions: MenuOption[];
};

export function AppRouter({ menuOptions }: AppRouterProps) {
  return (
    <Suspense>
      <Routes>
        <Route path={'/'} element={<Home></Home>}></Route>
        <Route path={menuOptions[0].path} element={<Home></Home>}></Route>
        <Route path={menuOptions[1].path} element={<MyBeers></MyBeers>}></Route>
        <Route path={menuOptions[2].path} element={<About></About>}></Route>
        <Route path={'/details/:id'} element={<Details></Details>}></Route>
        <Route path={'/edit'} element={<EditPage editBeer></EditPage>}></Route>
        <Route path={'/create'} element={<CreatePage></CreatePage>}></Route>
        <Route path={'*'} element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </Suspense>
  );
}
