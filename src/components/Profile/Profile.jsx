import PropTypes from 'prop-types';
import css from '../Profile/Profile.module.css';

const {
  profileCard,
  description,
  name,
  statsItem,
  label,
  quantity,
  stats,
  avatar: cssAvatar,
  tag: cssTag,
  location: cssLocation,
} = css;

export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <div className={profileCard}>
      <div className={description}>
        <img src={avatar} alt={username} className={cssAvatar} />
        <p className={name}>{username}</p>
        <p className={cssTag}>{tag}</p>
        <p className={cssLocation}>{location}</p>
      </div>

      <ul className={stats}>
        <li className={statsItem}>
          <span className={label}>Followers</span>
          <span className={quantity}>{followers}</span>
        </li>
        <li className={statsItem}>
          <span className={label}>Views</span>
          <span className={quantity}>{views}</span>
        </li>
        <li className={statsItem}>
          <span className={label}>Likes</span>
          <span className={quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
