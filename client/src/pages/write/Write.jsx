import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/Context'
import api from '../../api/posts.js'
import './write.css'
import Notification from '../../components/notification/Notification'


const Write = () => {
  const { user } = useContext(Context)
  const [categories, setCategories] = useState([])
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [content, setContent] = useState("")
  const [file, setFile] = useState("")
  const [errorMessages, setErrorMessages] = useState([])
  const [successMessage, setSuccessMessage] = useState("")

  const handleCreatePost = async e => {
    e.preventDefault()
    setErrorMessages([])
    console.log({ category })
    const newPost = {
      title,
      category,
      content,
      userId: user.id
    }

    try {
      if(file) {
        newPost.image = file.name
      }

      const post = await api.post('/posts', newPost)

      if( post ) {
        setSuccessMessage("Post creado satisfactoriamente")
        setTimeout(() => {
          window.location.replace('/')
        }, 3000);
      }
     
    } catch (error) {
      console.log(error)
      setErrorMessages(error.response.data);
    }
  }

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await api.get('/categories');

      setCategories(data.categories)
    }

    getCategories();

  }, [])

  return ( 
    <div className="write">
      {
        file && (
          <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
        )
      }
      <form className="writeForm" onSubmit={handleCreatePost}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput"><i className="writeIcon fa-solid fa-plus"></i></label>
          <input 
            type="file" 
            id="fileInput" 
            style={{display: "none"}} 
            onChange={(e) => {setFile(e.target.files[0])}}
          />
          <input 
            type="text" 
            placeholder="Título" 
            className="writeInput" 
            autoFocus={true} 
            onChange={(e) => {setTitle(e.target.value)}}
          />          
        </div>
        <div className="writeFromGroup">
          <select className="writeCategories writeInput"  onChange={(e) => {setCategory(e.target.value)}} >
            <option>Selecciona la categoría</option>
            {
              categories.map(cat => (
                <option 
                  key={Math.floor(Math.random() * 10000)} 
                  value={cat.name}
                >{cat.name}</option>
              ))
            }  
          </select>
        </div>
        <div className="writeFormGroup">
          <textarea 
            placeholder="Contenido" 
            typeof="text" 
            className="writeInput writeText"
            onChange={(e) => {setContent(e.target.value)}}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">Publish</button>
        { errorMessages.length ?
            <Notification message={errorMessages[0].msg} type="error" /> : ''
          }
          { successMessage ?
            <Notification message={successMessage} /> : ''
          }
      </form>
    </div>
   );
}
 
export default Write;