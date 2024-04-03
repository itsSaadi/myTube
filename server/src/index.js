import express from "express"
import dotenv from 'dotenv'
import connectDB from "./db/index.js"

const app = express()
dotenv.config()
const port = process.env.PORT || 3000

//mongoDB_Connection
connectDB()



app.listen(port, () => {
    console.log(`App is listening on http://localhost:${port} port`)
})

