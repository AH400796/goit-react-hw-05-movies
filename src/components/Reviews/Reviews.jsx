import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'services/axios-api';
import { toastNotifyError } from 'services/toast-notify';
import ReviewsItem from 'components/ReviewsItem';
import { ReviewsList, NoReviews } from './Reviews.styled';

export default function Reviews() {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();
  const movieIdToNumber = Number(movieId);

  useEffect(() => {
    getMovieReviews(movieIdToNumber)
      .then(response => {
        setMovieReviews([...response.data.results]);
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
      {movieReviews.length !== 0 ? (
        <ReviewsList>
          {movieReviews.map(({ id, author, content }) => {
            return <ReviewsItem key={id} author={author} content={content} />;
          })}
        </ReviewsList>
      ) : (
        <NoReviews>We don`t have any reviews for this movie</NoReviews>
      )}
    </>
  );
}
