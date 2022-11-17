import { Link } from 'react-router-dom';

const getPosterURL = (url) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${url}`
}



const MovieList = ({movies}) => {
    return(
        <div className="movie-list">
            {movies.map((movie) => (
                <div className="movie-preview" key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>
                        {
                            movie.poster_path.charAt(0) == '/' ? <img src={getPosterURL(movie.poster_path)} /> :
                            <img src={`images/${movie.poster_path}`} />

                        }
                        <h2>{ movie.title }</h2>
                    </Link>
                    
                </div>
            ))}
        </div>
    )
};

export default MovieList;