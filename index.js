const express = require('express')
const path = require('path')
const app = express()

app.use(
    express.static(path.resolve(__dirname, './public'))
)

app.get('/', (req, res, next) => {
    res.end('hello world5')
})

app.listen(3001)