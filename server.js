const cookieParser = require('cookie-parser')
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const logger = require('morgan')
const _ = require('lodash')
//Create an App
const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

const PORT = process.env.PORT || 3000

app.set('trust proxy', 1)
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  seveUninitialized: true,
  cookie: { secure: false }
}))

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url)

  } else {
    next()
  }
})

app.use(express.static('public'))

app.listen(PORT, function(){
  console.log('Express server is running on port ' + PORT)
})


users = [
  { name: 'Miss', admin: true , password:'111' },
  { name: 'Bill', admin: false , password: '222'},
  { name: 'Matt', admin: false , password: '333'}
]


app.post('/', (req, res) => {
  console.log('req.body here:', req.body);

const user = _.find(users, {name: req.body.name})
  if (!user) {
    res.json({message: 'User Not Found'})
  } else if (user.password === req.body.password) {

    req.session.userName = user.name
    req.session. isAdmin = user.admin

    res.json({message: 'you are loged in'})
  } else {
    res.json({message: 'Incorrect Password, please try again'})
  }
})

function isAuthenticated(req, res, next) {
  if (req.session.userName) {
    console.log('Yup');
    next()
  } else {
    res.send('nope')
  }
}

function isAdmin(req, res, next) {
  if (req.session.isAdmin) {
    console.log('Yup');
    next()
  } else {
    res.send('nope')
  }
}
app.get('/private', isAuthenticated, (req, res) => {
  res.send('Only users can see this...')
})

app.get('/users', isAdmin, (req, res) => {
  res.json(users)
})
// app.get('/users', isAuthenticated (req, res) => {
//   res.json(users)
// })
