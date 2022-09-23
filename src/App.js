import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import MoviesHome from './Pages/MoviesHome';
import TvShowHome from './Pages/TvShowHome';
import Video from './Pages/VideoDetail';
import Payment from './Pages/Payment';
import Profile from './Pages/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './Pages/AdminHome';
import ListFilm from './Pages/AdminList';
import AddFilm from './Pages/AdminAddFilm';
import AdminVideo from './Pages/AdminVideo';
import { API, setAuthToken } from './config/api';
import { useContext, useState } from "react";
import { UserContext } from "../src/context/userContext";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const navigate = useNavigate()
  const [state, dispatch] = useContext(UserContext); // membuat atau memanggil useContext yang dimana state menampung UserContext
  console.log("ini state", state)

  // useEffect(() => {
  //   if (localStorage.token) {
  //     setAuthToken(localStorage.token)
  //   }

  //   // Redirect Auth
  //   if(state.user.role === "admin") {
  //     navigate("/admin")
  //   } else {
  //     navigate("/")
  //   }
  // },[state])

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");
      // return console.log("response" , response.data.data)
      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      // Get user data
      let payload = response.data.data;
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.token) {
      checkUser();
    }
  }, []); 

  return (
      <Routes>
        {/* user and guest */}
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<MoviesHome />} />
        <Route path='/tvshow' element={<TvShowHome />} />
        <Route path='/video/:id' element={<Video />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/profile' element={<Profile />} />

        {/* admin */}
        <Route path='/listfilm' element={<ListFilm />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/addfilm' element={<AddFilm />} />
        <Route path='/adminvideo' element={<AdminVideo />} />
      </Routes>
  );
}

export default App;
