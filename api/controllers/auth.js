import axios from 'axios'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config()

const url = process.env.API_URL

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body
    const saltRounds = Number(process.env.SALT_CODE)

    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    const { data } = await axios.post(`${url}/users`, {
     name, 
     email,
     password: hash,
   
    })

    const user = data;
   
    res.json({user: {
      "id": user.id,
      "name": user.name,
      "email": user.email,
      "image": user.image
    }})
    
  } catch (error) {
    console.log(error)
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body

    const { data } = await axios.get(`${url}/users`);
    const user = await data.find(u => u.email === email);
    
    console.log(user)

    if(!user) {
      return res.status(404).json([
        {
          "msg": "El usuario no esta registrado",
        }
      ])
    }

    const isCorrect = bcrypt.compareSync(password, user.password);
    if(!isCorrect) {
      return res.status(400).json([
        {
          "msg": "Credenciales inválidas",
        }
      ])
    }

    const token = jwt.sign({id: user.id}, process.env.JWT)
    res.cookie("access_token", token, {
      httpOnly: true
    })
    .status(200)
    .json({
      "id": user.id, "name": user.name, "email": user.email, "image": user.image,  token
    })
    
  } catch (error) {
    console.log(error)
  }
}


export { register, login }
