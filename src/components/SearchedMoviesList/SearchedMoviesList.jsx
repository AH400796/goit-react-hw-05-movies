import { List } from './SearchedMoviesList.styled';
import SearchedMoviesListItem from 'components/SearchedMoviesListItem';
import PropTypes from 'prop-types';

export default function SearchedMoviesList({ movies }) {
  return (
    <List>
      {movies?.map(({ id, title }) => {
        return <SearchedMoviesListItem key={id} id={id} title={title} />;
      })}
    </List>
  );
}

SearchedMoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
