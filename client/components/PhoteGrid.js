import React from 'react';
import Photo from './Photo'

const PhotoGrid = ({ posts }) => {
  return (
    <div className="photo-grid">
    {posts.map((post, index) => {
      return <Photo key={index} index={index} post={post}/>
    })}
    </div>
  )
};

export default PhotoGrid;