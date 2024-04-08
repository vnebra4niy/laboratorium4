const express = require('express')
const bodyParser=require('body-parser')

const app = express()
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))

const studentsRouter=require('./routers/student')
const errorRouter=require('./routers/error')

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

app.get('/', studentsRouter.getAddNewStudentPage)

app.get('/success', (req, res) => {
    res.render('Success', { title: 'Success' })
  })
  
app.get('/students-list', (req, res) => {
  res.render('List', { title: 'List' })
})
  
app.post('/add-student', studentsRouter.postAddNewStudent)

app.use(errorRouter.getNotFoundPage)