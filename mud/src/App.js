import React from 'react';
import {Route} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UserContext from './contexts/UserContext';
import Login from './components/Login/Login';
import Game from './components/Game/game';
import './App.css';

function App() {

  const [ user, setUser ] = useState(() => (localStorage.user ? JSON.parse(localStorage.user) : null));

  useEffect(
		() => {
			user && localStorage.setItem('user', JSON.stringify(user));
		},
		[ user ]
  );
  
  return (
    <UserContext.Provider value={{user, setUser}}>
    <div className="App">
      <h1>MUD</h1>
      <Route path='/' component={Login} />
      <Route path='/signup' component={Signup} />
      <PrivateRoute path='/games' component={Game} />
    </div>
    </UserContext.Provider>
  );
}

export default App;
