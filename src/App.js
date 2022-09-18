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


function App() {
  return (
      <Routes>
        {/* user and guest */}
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<MoviesHome />} />
        <Route path='/tvshow' element={<TvShowHome />} />
        <Route path='/video' element={<Video />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/profile' element={<Profile />} />

        {/* admin */}
        <Route path='/admin' element={<Admin />} />
        <Route path='/listfilm' element={<ListFilm />} />
        <Route path='/addfilm' element={<AddFilm />} />
        <Route path='/adminvideo' element={<AdminVideo />} />
      </Routes>
  );
}

export default App;
