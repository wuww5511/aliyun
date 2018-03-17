const express = require('express')

const app = express()

app.get('/', (req, res, next) => {
    res.end('hello world5')
})

app.listen(3001)