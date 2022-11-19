import React, { useState, useEffect} from 'react'
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import api from '../../api/posts.js'
import './home.css'
import { useLocation } from 'react-router-dom';
import NoPosts from '../../components/noposts/NoPosts';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const getAllPosts = async () => {
      let urlPost = '/posts';
      if( search ) {
        urlPost += search;
      }
      const { data } = await api.get(urlPost)
      setPosts(data.posts)
    }

    getAllPosts()

  }, [search])

  return (
    <>
      <Header />
      <div className="home">
        { posts.length ? <Posts posts={posts} /> : <NoPosts /> }
        <Sidebar />
      </div>
    
    </>
  );
}
 
export default Home;