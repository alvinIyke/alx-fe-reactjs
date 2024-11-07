import ProfilePage from './components/ProfilePage';
import UserContext from '../UserContext';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider = {...userData}>
     <ProfilePage />
    </UserContext.Provider>
  );
  
}

export default App
