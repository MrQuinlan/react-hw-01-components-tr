import './App.css';
import user from 'user.json';
import Profile from './Profile';

function App() {
  return (
    <>
      <Profile {...user} />
    </>
  );
}

export default App;
