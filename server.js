require('dotenv').config()
const app = require('./backend/app')
const server = require('http').Server(app)
const enviroment = process.env.NODE_ENV  ;
const stage = require('./config')[enviroment]
server.listen(`${stage.port}`,()=>{
    console.log(`server now listening at localhost:${stage.port}`)
})
