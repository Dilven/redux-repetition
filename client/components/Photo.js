import React from 'react'
import { Link } from 'react-router-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Photo = ({ post, index, onClick }) => {
  return (
    <figure className="grid-figure">
      <div className="grid-photo-wrap">
        <Link to={`/view/${post.code}`}>
          <img src={post.display_src} alt={post.caption} className="grid-photo"/>
        </Link>
        <CSSTransitionGroup  transitionName="like"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          <span key={post.likes} className="likes-heart">{post.likes}</span>
        </CSSTransitionGroup>
      </div>
    <figcaption>
      <p>{post.caption}</p>
      <div className="control-button">
        <button onClick={onClick.bind(this, index)} className="likes">&hearts; {post.likes}</button>
      </div>
    </figcaption>
    </figure>
  )
}


export default Photo;