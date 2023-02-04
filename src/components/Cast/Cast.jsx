import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCredits } from 'services/axios-api';
import { toastNotifyError } from 'services/toast-notify';
import CastItem from 'components/CastItem';
import { CastList, NoCast } from './Cast.styled';

export default function Cast() {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();
  const movieIdToNumber = Number(movieId);

  useEffect(() => {
    getMovieCredits(movieIdToNumber)
      .then(response => {
        const casts = response.data.cast;
        const castsId = casts.map(cast => cast.id);
        const castSet = Array.from(new Set(castsId));
        let newCast = [];
        castSet.forEach(el => {
          newCast.push(casts.find(cast => cast.id === el));
        });

        setMovieCast(newCast);
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
  }, [movieIdToNumber]);

  return (
    <>
      {movieCast.length !== 0 ? (
        <CastList>
          {movieCast.map(({ id, name, profile_path, character }) => {
            return (
              <CastItem
                key={id}
                name={name}
                profile_path={profile_path}
                character={character}
              />
            );
          })}
        </CastList>
      ) : (
        <NoCast>There is no information about casts in this movie</NoCast>
      )}
    </>
  );
}
