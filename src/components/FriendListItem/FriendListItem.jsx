// import clsx from 'clsx';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <div>
    <img src={avatar} alt={`Avatar of ${name}`} width="48" />
    <p>{name}</p>
    <span>{isOnline ? 'Online' : 'Offline'}</span>
  </div>
);

export default FriendListItem;
