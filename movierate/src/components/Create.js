import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [poster_path, setPosterPath] = useState('');
  const [author, setAuthor ] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const Movie = { title, body, poster_path, author };

    fetch('http://localhost:8000/movies/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Movie)
    }).then(() => {
      navigate('/');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>Movie title:</label>
        <input
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Movie Director:</label>
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label>Movie Description:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Movie Image Name:</label>
        <input
          type="text"
          required
          value={poster_path}
          onChange={(e) => setPosterPath(e.target.value)}
        />
        <button>Add Movie</button>
      </form>
    </div>
  );
}
 
export default Create;