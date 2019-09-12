const express = require('express');
const bodyParser = require('body-parser');
const logger =  require('morgan') ;
const app = express()
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())
const enviroment = process.env.NODE_ENV  ;
if(enviroment !== 'production'){
    app.use(logger('dev'))
}
//route
const user_route = require('./route/route.user')
app.use('/api/v1',user_route)

module.exports = app