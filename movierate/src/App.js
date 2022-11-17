import Navbar from './components/NavBar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import MovieDetails from './components/MovieDetails';
import NotFound from './components/NotFound';
import YourMovies from './components/YourMovies';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path='/yourmovies' element={<YourMovies/>} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;