import YourMovieList from "./YourMovieList";
import useFetch from "./useFetch";

const YourMovies = () => {
  const { data: movies } = useFetch('http://localhost:8000/movies');

  return (
    <div className="home">
      { movies && <YourMovieList movies={movies} /> }
    </div>
  );
}
 
export default YourMovies;