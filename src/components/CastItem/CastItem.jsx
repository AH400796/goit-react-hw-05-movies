import { ListItem, Character, Name, Photo } from './CastItem.styled';
import PropTypes from 'prop-types';

export default function CastItem({ name, profile_path, character }) {
  const photo = profile_path
    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
    : 'https://i.ibb.co/yQNvgQ7/1231313.jpg';

  return (
    <ListItem>
      <Photo src={photo} alt="" />
      <Name>{name}</Name>
      <Character>Character: {character}</Character>
    </ListItem>
  );
}

CastItem.propTypes = {
  name: PropTypes.string.isRequired,
  profile_path: PropTypes.string,
  character: PropTypes.string.isRequired,
};
