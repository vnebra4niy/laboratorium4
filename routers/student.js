let students=[]
let nextId=1

exports.getAddNewStudentPage = (req, res) => {
    res.render('Home', { title: 'Add new student' })
}
  
exports.postAddNewStudent = (req, res) => {
    const fullName = req.body.fullName
    const code = req.body.code
    const fieldOfStudies = req.body.fieldOfStudies

    const newStudent = {
        id: nextId,
        fullName: fullName,
        code: code,
        fieldOfStudies: fieldOfStudies
    }

    students.push(newStudent)
    nextId++

    res.redirect('/success')
}  

exports.getAddingNewStudentSuccessPage = (req, res) => {
    res.render('Success', { title: 'Success'})
}
  
exports.getStudentsListPage = (req, res) => {
    res.render('List', { title: 'List'})
}