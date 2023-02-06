import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TvShows from './pages/TvShow';
import Movies from './pages/Movies';
import Upcoming from './pages/Upcoming';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='tvshows' element={<TvShows />} />
        <Route path='movies' element={<Movies />} />
        <Route path='upcoming' element={<Upcoming />} />
      </Routes>
    </>
  );
};

export default App;
