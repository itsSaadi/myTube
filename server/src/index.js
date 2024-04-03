import dotenv from 'dotenv'
import connectDB from "./db/index.js"
import { app } from './app.js'

dotenv.config()
const port = process.env.PORT || 3000

//mongoDB_Connection
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`App is listening on http://localhost:${port} port`)
    })
}).catch((err) => {
    console.log(`error : ${err}`)
})




