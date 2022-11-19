import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const url = process.env.API_URL

const isEmailExist = async email => {
  const { data } = await axios.get(`${url}/users`)

  const emailExists = data.find(u => u.email === email)

  if(emailExists) {
    throw new Error('El email esta registrado')
  } 
}

const isTitleExist = async title => {
  const { data } = await axios.get(`${url}/posts`)

  const titleExists = data.find(u => u.title === title)

  if(titleExists) {
    throw new Error('El title esta duplicado')
  } 
}



export { isEmailExist, isTitleExist }