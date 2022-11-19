import axios from 'axios'
import dotenv from 'dotenv'
import { getImageDefault } from '../validator/image.js'
dotenv.config()

const url = process.env.API_URL

const create = async (req, res) => {
  try {
    const { title, content, image, userId, category} = req.body

    let imageFinal = image 
    if(!imageFinal) {
      imageFinal = getImageDefault()
    } else {
      const pixbayApiUrl = process.env.PIXBAY_API_URL
      const pixbayApiKey = process.env.PIXBAY_API_KEY

      const { data } = await axios.get(`${pixbayApiUrl}?key=${pixbayApiKey}&q=computer`);

      const  countImage = data.hits.length
      const radomNumer = Math.floor(Math.random() * countImage-1);
      console.log(radomNumer)
      imageFinal =  data.hits[radomNumer].userImageURL
      console.log(imageFinal)
    }

    const { data } = await axios.post(`${url}/posts`, {
      title, 
      content,
      image: imageFinal,
      userId,
      category
    })

    const post = data;
   
    res.json({post})
    
  } catch (error) {
    console.log(error)
  }

}

const getPosts = async (req, res) => {
  try {
    let urlPost = `${url}/posts?_expand=user`;
    const search = req.query;
    
    console.log( req.query )
    if( search ) {

      if( search.user ) {
        const userName = search.user;
        const { data } = await axios.get(`${url}/users?name=${userName}`)
        search.userId = data[0].id
        delete search.user;
      }

      const searchNames = Object.keys(search);
      const searchValues = Object.values(search);

    
      console.log( searchNames )
      
      for (let i = 0; i < searchNames.length; i++) {
        urlPost += `&${searchNames[i]}=${searchValues[i]}`;
      }
    }

    console.log( urlPost )
    
    const { data } = await axios.get(urlPost)
   
    const posts = data

    res.json({posts})
  } catch (error) {
    console.log(error)
  } 
 
}

const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const postId = Number(id)
  
    const { data } = await axios.get(`${url}/posts?_expand=user`);
    const post = data.find(u => u.id === postId);
  
    if(!post) {
      return res.status(404).json([
        {
          "msg": "El post no existe",
        }
      ]
        
      )
    }
  
    res.json({post})
    
  } catch (error) {
    console.log(error)
  }
 
}

const update = async (req, res) => {
  try {
    const { title, content, image, userId, category} = req.body

    const { id } = req.params;
    const postId = Number(id)

    const { data } = await axios.get(`${url}/posts`);
    console.log({ data })
    const post = data.find(u => u.id === postId);

    if(!post) {
      return res.status(404).json([
        {
          "msg": "El post no existe",
        }
      ]
        
      )
    }

    let imageFinal = image
    if(!imageFinal) {
      imageFinal = getImageDefault()
    }
      
    await axios.put(`${url}/posts/${postId}`, {
      title, 
      content,
      image: imageFinal,
      userId,
      category
    })
    res.json({ msg: 'Post fue actualizado' })
  } catch (error) {
    console.log(error)
  }
}

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const postId = Number(id)

    const { data } = await axios.get(`${url}/posts`);
    const post = data.find(u => u.id === postId);

    if(!post) {
      return res.status(404).json([
        {
          "msg": "El post no existe",
        }
      ]
        
      )
    } 
      
    await axios.delete(`${url}/posts/${postId}`);
    res.json({ msg: 'Post fue eliminado' })
  } catch (error) {
    console.log(error)
  }
}


export {create, getPost, getPosts, update, destroy }