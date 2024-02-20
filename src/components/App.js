import './App.css';
import user from 'user.json';
import data from 'data.json';
import Profile from './Profile';
import Statistics from './Statistics';

function App() {
  return (
    <>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
    </>
  );
}

export default App;
