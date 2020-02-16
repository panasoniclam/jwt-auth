const express = require('express')
const app = express.Router()
const jwt = require('json-web-token')
const server = require('http').Server(app)
app.post('/',(req,res,next)=>{
    res.status(200).send({
        message:"jddjdjdj"
    })
})
server.listen(4000,()=>console.log('server running is port 4000'))


module.exports =app