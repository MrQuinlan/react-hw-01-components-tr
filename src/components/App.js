import './App.css';
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';

function App() {
  return (
    <>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </>
  );
}

export default App;
