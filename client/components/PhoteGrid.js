import React from 'react';
import Photo from './Photo'

const PhotoGrid = ({ posts }) => {
  console.log(posts)
  return (
    <div className="photo-grid">
    {posts.map((post, index) => {
      return <Photo key={index} i={index} post={post}/>
    })}
    </div>
  )
};

export default PhotoGrid;