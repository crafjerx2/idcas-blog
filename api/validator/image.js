import dotenv from 'dotenv'
dotenv.config()

const getImageDefault = () => {
  return process.env.DEFAULT_IMAGE
}

export { getImageDefault }
