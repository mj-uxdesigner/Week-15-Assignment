import axios from "axios";
import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import useFetch from "./useFetch";

const Home = () => {
  // const { error, isPending, data: movies } = useFetch('http://localhost:8000/movies');
  const [ movies, setMovies] = useState([])

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6c1b2f3612c61cef6ab4cb073bfb3b33')
    .then((response) => {
      setMovies(response.data.results)
    }).catch(err => {console.log(err)})
  }, [])

  console.log(movies)

  return (
    <div className="home">
      { movies && <MovieList movies={movies} /> }
    </div>
  );
}
 
export default Home;