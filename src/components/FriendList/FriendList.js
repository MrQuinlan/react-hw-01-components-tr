import css from './FriendList.module.css';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => {
        return <FriendListItem key={friend.id} {...friend} />;
      })}
    </ul>
  );
};

export default FriendList;
