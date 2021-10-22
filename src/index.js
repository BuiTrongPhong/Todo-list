const express = require('express')
const dotenv = require('dotenv').config()
const db = require('./app/config/db/index')
const todo = require('./routers/index')
const nunjucks = require('nunjucks')
const morgan = require('morgan')
const methodOverride = require('method-override')
    // connect to database
db()

const app = new express()
app.use(morgan('dev'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
    //teamplate engine
nunjucks.configure('src/app/views', {
    express: app,
    watch: true
})
app.set('view engine', 'njk')


app.use('/', todo)



app.use((error, req, res, next) => {
    return res.status(error.status || 500).send(
        error.stack
    )
})
const port = process.env.PORT
app.listen(port || 3000, () => console.log(`listenning on http://localhost:${port}`))