import PropTypes from 'prop-types';
import css from '../FriendListItem/FriendListItem.module.css';

const {
  item,
  statusOnline,
  statusOffline,
  avatar: cssAvatar,
  name: cssName,
} = css;

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={item}>
      <span className={isOnline ? statusOnline : statusOffline }></span>
      <img className={cssAvatar} src={avatar} alt={name} width="48" />
      <p className={cssName}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
