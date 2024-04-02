import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => (
  <ul>
    {friends.map(el => (
      <li key={el.id}>
        <FriendListItem
          avatar={el.avatar}
          name={el.name}
          isOnline={el.isOnline}
        />
      </li>
    ))}
  </ul>
);

export default FriendList;
