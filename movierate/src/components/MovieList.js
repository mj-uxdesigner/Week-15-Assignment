

const getPosterURL = (url) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${url}`
}



const MovieList = ({movies}) => {


    const handleSubmit = (poster_path, title) => {

        const Movie = {poster_path, title}

        fetch('http://localhost:8000/movies/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Movie)
      })
    }
    

    return(
        <div className="movie-list">
            {movies.map((movie) => (
                <div className="movie-preview" key={movie.id}>
                        <img src={getPosterURL(movie.poster_path)} />
                        <h2>{ movie.title }</h2>
                        <p>Rating Average { movie.vote_average }</p>
                        <button onClick={() => handleSubmit(movie.poster_path, movie.title)}>Save</button>
                    
                </div>
            ))}
        </div>
    )
};

export default MovieList;