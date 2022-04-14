const express = require('express')
const chalk = require('chalk')
const path = require('path')
const morgan = require('morgan')
const mealRouter = require('./routes/mealRouter')
const expressLayout = require('express-ejs-layouts')

const port = process.env.PORT || 4000

const app = express()

//views setup
app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(expressLayout)
//middlewares setups
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))

//routes setups
app.use('/', mealRouter)

app.listen(port, () => console.log(`listening on ${chalk.blue(4000)}`))