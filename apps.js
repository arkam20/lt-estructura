var createError = require('http-errors')
var express = require('express')
var path = require('path')
var logger = require('morgan')

var adminRouter = require('./routes/admin');

var app = express();

// Aqui se establecen las vistas
app.set('views', path.join(__dirname, 'views'))

//Se establece el motor de vistas
app.set('view engine','ejs');

//
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//Aqui se establece la carpeta publica principal para poder acceder al resto de recursos
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', adminRouter);

module.exports = app;