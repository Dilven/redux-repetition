import React from 'react';
import { connect } from 'react-redux';
import Photo from './Photo';
import Comments from './Comments';

import * as actions from '../actions/main';

const Single = ({ posts, match, giveLike, comments }) => {
  const codePhoto = match.params.code;
  const indexPhoto = posts.findIndex(el => el.code === codePhoto);

  return (
    <div className="single-photo">
      <Photo post={posts[indexPhoto]} index={indexPhoto} onClick={giveLike}/>
      <Comments codePhoto={codePhoto}/>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    posts: state.main.posts,
    comments: state.main.comments
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      giveLike: (index) => dispatch(actions.giveLike(index))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Single);