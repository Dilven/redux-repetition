import React from 'react'

const Comments = ({ comments }) => {
  console.log(comments)
  return (
    <div className="comments">
      {comments.map((comment, index) => {
        return (
          <p key={index}>
            <strong>{comment.user}</strong>
            {comment.text}
            <button className="remove-comment">&times;</button> 
          </p>
        )
        })}
        <form ref="commentForm" className="comment-form">
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden/>
        </form>
    </div>
  )
}


export default Comments;