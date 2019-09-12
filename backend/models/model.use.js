const mongoose = require('mongoose')
const Schema = mongoose.Schema ;
const bcrypt = require('bcrypt')
const enviroment = process.env.NODE_ENV
const stage = require('./../../config')[enviroment]
const userSchema = new Schema({
    name:{
        type:'String',
        unique:true,
        trim:true,
        required:true
    },
    hash:{
        type:'String',
        unique:true,
        trim:true,

    }
})
userSchema.pre('save',next=>{
    const user = this ;
    if(!user.Modifiled || !user.isNew){
        next()
    }else{
        bcrypt.hash(user.hash,stage.saltingRounds,(err,hash)=>{
            if(err){
                console.log('errorr hashing password fro user',user
                .name)
                next()
            }else{
                user.hash = hash
                next()
            }
            
        })
    }
})
const user = mongoose.model('user',userSchema)
module.exports = user