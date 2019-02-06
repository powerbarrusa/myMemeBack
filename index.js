const express = require('express')
const app = express()
const port = process.env.PORT || 3001
var cors = require('cors')
const dotenv = require("dotenv").config()
const bodyParser = require('body-parser')


app.use(cors())



const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const knex = require('knex')(config)

app.use(bodyParser.urlencoded({
  extended:false}))

app.use(bodyParser.json())

app.use(express.static('public'))


app.get('/', (req, res, next) => {
  knex('memes')
  .then((rows) => {
    res.send(rows)
  })
  .catch((err) => {
    next(err)
  })
})

app.post('/createMeme', (req, res, next) => {
  console.log("in post", req.body)
  knex.insert(req.body).into('memes')
  .then((rows) => {
    res.redirect('http://localhost:3000/yourMemes')
    // res.send(rows)
  })
  .catch((err) =>{
    next(err);
  })
})


app.use((err, req, res, next) => {
  res.status(500).json({ error: { message: 'SERVER ERROR WHAAT?!' } })
})

app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Route not found, dude.' } })
})

app.listen(port, () => console.log(`jsflashbackend listening on port ${port}!`))
