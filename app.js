// include packages and define server related variables
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')



// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


// routes setting
// front page
app.get('/', (req, res) => {
  res.render('index')
})
// about page
app.get('/about', (req, res) => {
  res.render('index_about')
})
// portfolio page
app.get('/portfolio', (req, res) => {
  res.render('index_portfolio')
})
// contact page
app.get('/contact', (req, res) => {
  res.render('index_contact')
})


//start and listen to the express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})

