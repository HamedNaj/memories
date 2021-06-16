import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import postRoutes from './routes/posts.js'

const app = express()
dotenv.config()

app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use(cors())


app.use('/posts', postRoutes)
const PORT = process.env.NODE_ENV || 5000
mongoose.connect(process.env.CONNECTION_URL
  , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => {
    app.listen(PORT, () => console.log('Server running on port ', PORT))
    console.log('DB IS CONNECTED')
  })
  .catch(err => {
    console.log('error in connecting database ====>>>', err)
  })
app.use(express.static("../client/build"));
