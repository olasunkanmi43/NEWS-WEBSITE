const express = require('express')
const bodyParser = require('body-parser')


const app = express()
const port = 3000

// STATIC FILES
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))


//TEMPLATING ENGINE
app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))

// ROUTES
const newsRouter = require('./src/routes/news')

app.use('/', newsRouter)

// LISTEN ON PORT 3000
app.listen(port, () => console.log(`listening on port ${port}`))