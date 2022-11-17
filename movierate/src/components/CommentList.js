

const CommentList = ({ comments, commentId}) => {

    return(
        <div className="comment-list">
            {comments.map((comment) => {
                return (comment.commentId == commentId) ? (
                    <div className="comment-preview" key={comment.id}>
                        <p>{ comment.comment }</p>
                        <h3>{ comment.rating } Star Rating</h3>
                    </div>
                ) : ""
                
            })}
                
        </div>
    )
};

export default CommentList;