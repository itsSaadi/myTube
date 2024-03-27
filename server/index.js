const express = require('express')

const app = express()
const port = process.env.PORT || 3000


app.get('/', (req, res) => {
    res.send('Hey there server is working')
})
app.listen(port, () => {
    console.log(`App is listening on http://localhost${port} port`)
})

