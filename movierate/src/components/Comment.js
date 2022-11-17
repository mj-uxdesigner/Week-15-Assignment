import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Comment = (props) => {
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const [commentId, setCommentId] = useState(`${props.commentId}`)
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const Comment = { comment, rating, commentId };

    fetch(`http://localhost:8000/comments/`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Comment)
    }).then(() => {
      navigate('/');
    })
  }

  return (props.trigger) ? (
    <div className="comment">
        <div className="comment-inner">
            <h2>Add Comment and Rating</h2>
            <form onSubmit={handleSubmit}>
                <label>Movie Comment:</label>
                <textarea
                type="text" 
                required 
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                />
                <label>Rating:</label>
                <input
                    type='text'
                    required
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                />

                <button>Add Comment</button>
            </form>
        </div>
      
    </div>
  ) : "";
}
 
export default Comment;