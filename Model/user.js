const express = require("express");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		trim: true,
	},
    password: {
        type:String,
        required:true,
    },
	name: {
		type:String,
	},
	avatar: {
		type: String
	},
	date:{
		type: Date,
		default: Date.now
	}
});

module.exports=mongoose.model('user',userSchema)