import { lazy, useEffect, useState } from 'react';
import { fetchTrendMovies } from 'js/fetchApi';
import css from './styles.module.css';

const TrendingMovies = lazy(() => import('../../components/TrendingMovies'));

const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    const trendMovies = async () => {
      const movies = await fetchTrendMovies(url);
      setTrendingMovies(movies.results);
    };
    trendMovies();
  }, []);
  return (
    <>
      <h1 className={css.title}>Trending Today</h1>
      {trendingMovies.length ? (
        <TrendingMovies movies={trendingMovies} route={true} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Home;