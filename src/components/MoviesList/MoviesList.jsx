import { List } from './MoviesList.styled';
import MoviesListItem from 'components/MoviesListItem';
import PropTypes from 'prop-types';

export default function MoviesList({ movies }) {
  return (
    <List>
      {movies.map(({ id, title }) => {
        return <MoviesListItem key={id} id={id} title={title} />;
      })}
    </List>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
