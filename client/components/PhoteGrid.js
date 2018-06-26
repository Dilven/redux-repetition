import React from 'react';
import Photo from './Photo'

const PhotoGrid = ({ posts, handleLike }) => {
  return (
    <div className="photo-grid">
    {posts.map((post, index) => {
      return <Photo onClick={handleLike} key={index} index={index} post={post}/>
    })}
    </div>
  )
};

export default PhotoGrid;