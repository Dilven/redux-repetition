import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/main';

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }
  addComment = (event) => {
    event.preventDefault();

    const user = this.refs.author.value;
    const text = this.refs.comment.value;
    const fullComment = {text, user }

    this.props.addComment(this.props.codePhoto, fullComment);
    this.refs.commentForm.reset();
  }

  deleteComment = (indexComment, event) => {
    const codePhoto = this.props.codePhoto;
    this.props.deleteComment(codePhoto, indexComment);
  }

  render() {
    const { comments, codePhoto } = this.props;
    const commentsToPhoto = comments[codePhoto];

    return (
      <div className="comments">
        {commentsToPhoto.map((comment, index) => {
          return (
            <p key={index}>
              <strong>{comment.user}: </strong>
              {comment.text}
              <button onClick={this.deleteComment.bind(this, index)} className="remove-comment">&times;</button> 
            </p>
          )
          })}
          <form onSubmit={this.addComment} ref="commentForm" className="comment-form">
            <input type="text" ref="author" placeholder="author" />
            <input type="text" ref="comment" placeholder="comment" />
            <input type="submit" hidden/>
          </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({comments: state.main.comments});


const mapDispatchToProps = (dispatch) => {
  return {
      addComment: (codePhoto, comment) => dispatch(actions.addComment(codePhoto, comment)),
      deleteComment: (codePhoto, indexComment) => dispatch(actions.deleteComment(codePhoto, indexComment))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);