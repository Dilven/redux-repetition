import React from 'react'
import { Link } from 'react-router'

const Photo = ({ post, key }) => {
  console.log(post)
  return (
    <div key={key}>
    <figure className="grid-figure">
      <div className="grid-photo-wrap">
        <Link>
          <img src={post.display_src} alt={post.caption} className="grid-photo"/>
        </Link>
      </div>
    </figure>
    </div>
  )
}


export default Photo;