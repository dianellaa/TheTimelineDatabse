const express = require('express')
const app = express()
require('./mongo')
const routes = require('../routes')    


app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))


app.use(routes)
let port = 3000
app.listen(port, console.log(`app is on ${port}`))
