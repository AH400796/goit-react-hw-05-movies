import { ListItem, LinkItem } from './MoviesListItem.styled';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MoviesListItem({ id, title }) {
  const location = useLocation();

  return (
    <ListItem>
      <LinkItem to={`movies/${id}`} state={{ from: location }}>
        {title}
      </LinkItem>
    </ListItem>
  );
}

MoviesListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
