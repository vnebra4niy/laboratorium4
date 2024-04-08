exports.getAddNewStudentPage = (req, res) => {
    res.render('Home', { title: 'Add new student' })
  }
  
  exports.postAddNewStudent = (req, res) => {
    const fullName = req.body.fullName
    const code = req.body.code
    const fieldOfStudies = req.body.fieldOfStudies

    res.redirect('/success')
  }  