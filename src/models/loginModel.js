const jwt = require('jsonwebtoken')

const mongoose=require('mongoose')

const productSchema = new mongoose.Schema({
       email:{type:String,required:true},
	   password:{type:String,required:true}
}, {timestamps: true} )

module.exports=mongoose.model('login23nov',productSchema)