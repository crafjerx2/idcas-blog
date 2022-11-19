import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const url = process.env.API_URL

const getCategories = async (req, res) => {
  try {
    const { data } = await axios.get(`${url}/categories`)

    res.json({categories: data})
  } catch (error) {
    console.log(error)
  } 
 
}

const getCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const categoryId = Number(id)
  
    const { data } = await axios.get(`${url}/categories`);
    const category = data.find(u => u.id === categoryId);
  
    if(!category) {
      return res.status(404).json([
        {
          "msg": "El categoría no existe",
        }
      ])
    }
  
    res.json({ category })
    
  } catch (error) {
    console.log(error)
  }
 
}

const update = async (req, res) => {
  try {
    const {name } = req.body
    const { id } = req.params;
    const categoryId = Number(id)

    const { data } = await axios.get(`${url}/categories`);
    const category = data.find(u => u.id === categoryId);

    if(!category) {
      return res.status(404).json([
        {
          "msg": "El categoría no existe",
        }
      ]
        
      )
    } 
      
    await axios.put(`${url}/categories/${categoryId}`, {
      name
    });
    res.json({ msg: 'Categoría fue actualizada' })
  } catch (error) {
    console.log(error)
  }
}

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const categoryId = Number(id)

    const { data } = await axios.get(`${url}/categories`);
    const category = data.find(u => u.id === categoryId);

    if(!category) {
      return res.status(404).json([
        {
          "msg": "El categoría no existe",
        }
      ]
        
      )
    } 
      
    await axios.delete(`${url}/categories/${categoryId}`);
    res.json({ msg: 'Categoría fue eliminada' })
  } catch (error) {
    console.log(error)
  }
}


export { getCategory, getCategories, update, destroy }