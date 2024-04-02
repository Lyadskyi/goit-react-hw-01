import FriendListItem from '../FriendListItem/FriendListItem';
import css from '../FriendList/FriendList.module.css'

const FriendList = ({ friends }) => (
  <ul className={css.list}>
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
