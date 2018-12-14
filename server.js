var express, app, bodyParser, server, mongoose, session, flash, path

express = require('express')
app = express()
bodyParser = require('body-parser')
path = require('path')
flash = require('express-flash')
app.use(bodyParser.json())
app.use(flash())
app.use(express.static(__dirname + '/products/dist/products'))

require('./server/config/mongoose')

mongoose = require('mongoose')
mongoose.promise = global.Promise

var Product = mongoose.model('Product')

require('./server/config/routes')(app)

server = app.listen(1337)

app.all("*", (req, res,next)=>{
    res.sendFile(path.resolve("./products/dist/products/index.html"))
})