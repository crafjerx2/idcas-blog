import express from 'express'
import routeUser from './routes/user.js'
import routePost from './routes/post.js'
import routeAuth from './routes/auth.js'
import routeCategory from './routes/Category.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()

// Middleware
app.use(cors())
app.use(cookieParser())
app.use(express.json())

// routes
app.use('/api/users', routeUser)
app.use('/api/posts', routePost)
app.use('/api/auth', routeAuth)
app.use('/api/categories', routeCategory)


const port = 5000
app.listen(port, () => {
  console.log('app is running in ', port)
})