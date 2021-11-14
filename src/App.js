import React, {useReducer} from 'react'
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import UserReducer from './reducers/UserReducer';

function App() {


  const [state, dispatch] = useReducer(UserReducer, {
    user: {},
    logged_in: false
  })

  const login_user = () => {
    dispatch({type: "LOGIN"})
  }

  const logout_user = () => {
    dispatch({type: "LOGOUT"})
  }

  return (
    <div className="App">
      <h1>React Rails Auth and All That Jazzzz</h1>

      
      <button onClick={logout_user}>logout</button>
     

      <Home logged_in={state.logged_in} />
      <Login login_user={login_user} logged_in={state.logged_in} />
    </div>
  );
}

export default App;
