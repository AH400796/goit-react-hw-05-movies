import { ListItem, LinkItem } from './SearchedMoviesListItem.styled';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function SearchedMoviesListItem({ id, title }) {
  const location = useLocation();

  return (
    <ListItem>
      <LinkItem to={`${id}`} state={{ from: location }}>
        {title}
      </LinkItem>
    </ListItem>
  );
}

SearchedMoviesListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
