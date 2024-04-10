import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './ShareLayout/index';
import NotFound from './NotFound/index.jsx';
import { lazy } from 'react';
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const Movie = lazy(() => import('./Movie/Index.jsx'));
const Cast = lazy(() => import('./Cast/Index.jsx'));
const Reviews = lazy(() => import('./Reviews/Index.jsx'));

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<Movie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};