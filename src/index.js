const express = require('express')
const dotenv = require('dotenv').config()
const db = require('./app/config/db/index')
const index = require('./routers/index')
const nunjucks = require('nunjucks')
const morgan = require('morgan')
const methodOverride = require('method-override')
const multer = require('multer')
//upload file
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

const upload = multer({ storage: storage });

// connect to database
db()

const app = new express()

//middleware

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


app.use('/', index)



app.use((error, req, res, next) => {
    return res.status(error.status || 500).send(
        error.stack
    )
})
const port = process.env.PORT
app.listen(port || 3000, () => console.log(`listenning on http://localhost:${port}`))