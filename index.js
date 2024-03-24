require('dotenv').config()
const express = require('express')
const app = express()
const port = 5500

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/X', (req, res) => {
    res.send('Hello X user')
  })
  app.get('/inst', (req, res) => {
    res.send('Welcome to inst we create reels and blog')
  })
  

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})