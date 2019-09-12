const express = require('express')
const app = express.Router()

app.get('/user',(req,res,next)=>{
    res.status(200).json({
        message:"djdjdjdjjdjdjd"
    })
})



module.exports = app; 
