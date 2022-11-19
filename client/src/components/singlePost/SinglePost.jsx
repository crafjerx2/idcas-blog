import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import api from '../../api/posts.js'
import './singlePost.css'

const SinglePost = () => {
  const location = useLocation()
  const postId = location.pathname.split('/')[2]
  const [post, setPost] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const { data } = await api.get(`/posts/${postId}`)
      console.log(data.post)
      setPost(data.post)
      setUser(data.post.user)
    }

    getPost()

  }, [postId])
  return ( 
    <div className="singlePost">
      <div className="singlePostWrap">
        { post.image && (
            <img className="singlePostImg" src={ post.image } alt="" />
          )
        }
  
        <h1 className="singlePostTitle">{ post.title }
          <div className="singlePostIconEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>Autor: 
            <Link className="link" to={`/?user=${user.id}`}><strong>{ user.name }</strong></Link>
          </span>
          <span>{ post.date }</span>
        </div>
        <p className="singlePostDesc">
            { post.content }
        </p>
        
      </div>
    </div>
   );
}
 
export default SinglePost;