import axios from 'axios'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
dotenv.config()

const url = process.env.API_URL

const getUsers = async (req, res) => {
  try {
    const { data } = await axios.get(`${url}/users`)
    const users = data.map(d => ({ "id": d.id,
    "name": d.name,
    "email": d.email,
    "image": d.image
  }))
  
    res.json({users})
  } catch (error) {
    console.log(error)
  } 
 
}

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = Number(id)
  
    const { data } = await axios.get(`${url}/users`);
    const user = data.find(u => u.id === userId);
  
    if(!user) {
      return res.status(404).json([
        {
          "msg": "El usuario no existe",
        }
      ])
    }
  
    res.json({ user: { "id": user.id,
    "name": user.name,
    "email": user.email,
    "image": user.image
    } })
    
  } catch (error) {
    console.log(error)
  }
 
}

const update = async (req, res) => {
  try {
    const {name, email, password} = req.body
    const { id } = req.params;
    const userId = Number(id)

    const { data } = await axios.get(`${url}/users`);
    const user = data.find(u => u.id === userId);

    if(!user) {
      return res.status(404).json([
        {
          "msg": "El usuario no existe",
        }
      ]
        
      )
    } 
      
    await axios.put(`${url}/users/${userId}`, {
      name, email, password
    });
    res.json({ msg: 'Usuario fue actualizado' })
  } catch (error) {
    console.log(error)
  }
}

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = Number(id)

    const { data } = await axios.get(`${url}/users`);
    const user = data.find(u => u.id === userId);

    if(!user) {
      return res.status(404).json([
        {
          "msg": "El usuario no existe",
        }
      ]
        
      )
    } 
      
    await axios.delete(`${url}/users/${userId}`);
    res.json({ msg: 'Usuario fue eliminado' })
  } catch (error) {
    console.log(error)
  }
}


export { getUser, getUsers, update, destroy }