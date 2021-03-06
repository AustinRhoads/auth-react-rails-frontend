import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login';

import USER_ACTIONS from './actions/UserActions';

function App() {

  
  const userStatus = useSelector(state => state.userStatus)
  const user = useSelector(state => state.userStatus.user)
  const logged_in = useSelector(state => state.userStatus.logged_in)
  const state = useSelector(state => state)
  const dispatch = useDispatch()


  const login_user = (user, functions_object) => {
    dispatch(USER_ACTIONS.LOGIN(user, functions_object))
  }

  const logout_user = () => {
    dispatch(USER_ACTIONS.LOGOUT())
  }



  useEffect(() => {

    console.log(user)
    console.log(logged_in)
  }, [logged_in, user,userStatus, state, userStatus.logged_in])

  return (
    <div className="App">
      <h1>React Rails Auth and All That Jazzzz</h1>

      
     
     
      <Router>
      <Nav logged_in={logged_in} logout_user={logout_user}/>
        <Routes>
          <Route path="/" element={<Home user={user} loading={userStatus.loading} logged_in={logged_in} logout_user={logout_user} />} />
          <Route path="/login" element={<Login login_user={login_user} logged_in={logged_in} loading={userStatus.loading} log_in_errors={userStatus.log_in_errors} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
