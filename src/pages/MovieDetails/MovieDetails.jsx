import { useEffect, useState, useRef } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'services/axios-api';
import { toastNotifyError } from 'services/toast-notify';
import {
  PosterWrapper,
  MovieInfo,
  MovieInfoText,
  MovieTitle,
  InfoTitles,
  InfoText,
  Poster,
  AdditInfo,
  AdditList,
  AdditListItem,
  AdditWrapper,
  LinkItem,
} from './MovieDetails.styled';
import BackLink from 'components/BackLink';

export default function MovieDetails() {
  const [movieById, setMovieById] = useState({});
  const { movieId } = useParams();

  const movieIdToNumber = Number(movieId);
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '';
  const backlinkRef = useRef(backLinkHref);

  useEffect(() => {
    getMovieDetails(movieIdToNumber)
      .then(response => {
        setMovieById(response.data);
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

  const {
    poster_path,
    original_title,
    release_date,
    overview,
    genres,
    vote_average,
  } = movieById;

  const year = release_date?.slice(0, 4);
  const movieGenres = genres?.map(genre => genre.name).join(', ');
  const userVote = Math.round(vote_average * 10);

  const poster =
    poster_path !== null
      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
      : 'https://i.ibb.co/n6tGsmL/asdasda.jpg';

  return (
    <main>
      <BackLink to={backlinkRef.current}>Back to list</BackLink>
      <MovieInfo>
        <PosterWrapper>
          <Poster src={poster} alt="" width="250" />
        </PosterWrapper>
        <MovieInfoText>
          <MovieTitle>
            {original_title} ({year})
          </MovieTitle>
          <InfoText>User Score: {userVote}%</InfoText>
          <>
            <InfoTitles>Overview</InfoTitles>
            <InfoText>{overview}</InfoText>
          </>
          <>
            <InfoTitles>Genres</InfoTitles>
            <InfoText>{movieGenres}</InfoText>
          </>
        </MovieInfoText>
      </MovieInfo>
      <AdditWrapper>
        <AdditInfo>Additional information</AdditInfo>
        <AdditList>
          <AdditListItem>
            <LinkItem to="cast">Cast</LinkItem>
          </AdditListItem>
          <AdditListItem>
            <LinkItem to="reviews">Reviews</LinkItem>
          </AdditListItem>
        </AdditList>
        <Outlet />
      </AdditWrapper>
    </main>
  );
}
