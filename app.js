const express = require('express')
const bodyParser=require('body-parser')

const app = express()
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.render('Home', { title: 'Home' })
})

app.get('/success', (req, res) => {
    res.render('Success', { title: 'Success' })
  })
  
  app.get('/students-list', (req, res) => {
    res.render('List', { title: 'List' })
  })
  
  app.post('/add-student', (req, res) => {
    res.render('AddStudent', { title: 'Add Student' })
  })