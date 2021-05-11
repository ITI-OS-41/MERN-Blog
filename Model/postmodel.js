const express = require("express");
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true,
	},
    desc: {
        type:String,
        required:true,
    },
	auth: {
		type:String,
	}
})

module.exports=mongoose.model('blog',postSchema)