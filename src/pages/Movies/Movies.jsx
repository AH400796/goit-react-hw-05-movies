import { useSearchParams } from 'react-router-dom';
import SearchBox from '../../components/SearchBox';
import { searchMovie } from 'services/axios-api';
import { useState, useEffect } from 'react';
import { toastNotifyError, toastNotifyInfo } from 'services/toast-notify';
import SearchedMoviesList from 'components/SearchedMoviesList';

export default function Movies() {
  const [searchedMovies, setSearchedMovies] = useState(null);

  const [searchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (movieName === '') {
      return;
    }

    searchMovie(movieName)
      .then(response => {
        if (response.data.results.length === 0) {
          toastNotifyInfo('No data found on your request');
        }
        setSearchedMovies(response.data.results);
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
  }, [movieName]);

  return (
    <main>
      <SearchBox />
      {searchedMovies && searchedMovies.length !== 0 && (
        <SearchedMoviesList movies={searchedMovies} />
      )}
    </main>
  );
}
