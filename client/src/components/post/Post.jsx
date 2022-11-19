import React, { useEffect, useState } from 'react'
import './post.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Post = ({ post }) => {
  return ( 

    <div className="post">
      { post.image && (
          <img className="postImg" src={ post.image } alt="" />
        )
      }

      <div className="postInfo">
        <div className="postCats">
          {
            <span className="postCat">{post.category}</span>    
          }
        </div>
      
        <Link className="link" to={`/post/${post.id}`}>
          <span className="postTitle">{ post.title }</span>
        </Link>
        <hr />
        <span className="postDate">{ post.createdAt }</span>
        <div className="postDesc">
          { post.content }
        </div>
      </div>
    </div>

   
   );
}
 
export default Post;