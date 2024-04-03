import express from "express"
import dotenv from 'dotenv'

const app = express()
dotenv.config()
const port = process.env.PORT || 3000

//mongoDB_Connection


app.get('/', (req, res) => {
    res.send('workoing')
})

app.listen(port, () => {
    console.log(`App is listening on http://localhost:${port} port`)
})

