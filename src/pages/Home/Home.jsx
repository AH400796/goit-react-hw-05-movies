import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/axios-api';
import { HomeTitle, HomeMain } from './Home.styled';
import { toastNotifyError } from 'services/toast-notify';
import MoviesList from 'components/MoviesList';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(response => {
        setTrendingMovies(response.data.results);
      })
      .catch(function (error) {
        if (error.response) {
          toastNotifyError(error.response.data);
        } else if (error.request) {
          toastNotifyError('XMLHttpRequest failed');
        } else {
          toastNotifyError('Error', error.message);
        }
      })
      .finally();
  }, []);

  return (
    <HomeMain>
      <HomeTitle>Trending today:</HomeTitle>
      <MoviesList movies={trendingMovies} />
    </HomeMain>
  );
}
