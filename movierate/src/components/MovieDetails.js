import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Comment from "./Comment";
import CommentList from "./CommentList";
import { useEffect, useState } from "react";

const MovieDetails = () => {
  const { id } = useParams();
  const { data: movie, error, isPending } = useFetch('http://localhost:8000/movies/' + id);
  const [ commentData, setCommentData ] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    async function getUsers() {
      const response = await fetch('http://localhost:8000/comments', {
        method: 'GET',
        headers: {
          accept: 'application/json',
        },
      });

      const data = await response.json();

      setCommentData(data);
    }

    getUsers();
  }, []);
  

  const handleClick = () => {
    fetch('http://localhost:8000/movies/' + movie.id, {
      method: 'DELETE'
    }).then(() => {
      navigate('/');
    }) 
  }

  const modalClick = () => {

  }

  return (
    <div className="movie-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { movie && (
        <article>
          <h2>{ movie.title }</h2>
          <p>Made by { movie.author }</p>
          <div>{ movie.body }</div>
          <button onClick={handleClick}>delete</button>
          <Comment
            trigger={true}
            commentId={movie.id}
          />
          <div>
            <CommentList comments={commentData} commentId={movie.id}/>
          </div>
        </article>
      )}
    </div>
  );
}
 
export default MovieDetails;