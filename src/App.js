import React, { useEffect } from 'react';
import './App.css';
import Qoura from './component/Qoura';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './component/auth/Login';
import { auth } from './firebase';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch(login({
          uid : authUser.uid,
          photo : authUser.photoURL,
          displayName : authUser.displayName,
          email : authUser.email
        }));
        console.log(authUser)
      }
      else{
        dispatch(logout())
      }
    })
  }, [dispatch]);

  return (
    <div className="App">
      {
        user ? (<Qoura />) : (<Login />)
      }
    </div>
  );
}

export default App;
