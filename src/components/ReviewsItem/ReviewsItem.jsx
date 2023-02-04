import { ListItem, Author, Review } from './ReviewsItem.styled';
import PropTypes from 'prop-types';

export default function ReviewsItem({ author, content }) {
  return (
    <ListItem>
      <Author>Author: {author}</Author>
      <Review>{content}</Review>
    </ListItem>
  );
}

ReviewsItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
