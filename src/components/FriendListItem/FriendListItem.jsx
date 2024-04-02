import css from '../FriendListItem/FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <div className={css.listItem}>
    <img
      className={css.avatar}
      src={avatar}
      alt={`Avatar of ${name}`}
      width="48"
    />
    <p className={css.name}>{name}</p>
    <span className={isOnline ? css.online : css.offline}>
      {isOnline ? 'Online' : 'Offline'}
    </span>
  </div>
);

export default FriendListItem;
