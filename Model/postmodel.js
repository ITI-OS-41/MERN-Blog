// const express = require("express");
// const mongoose = require("mongoose");

// const postSchema = new mongoose.Schema({
// 	title: {
// 		type: String,
// 		required: true,
// 		trim: true,
// 	},
// 	desc: {
// 		type: String,
// 		required: true,
// 	},
// 	auth: {
// 		type: String,
// 	},
// 	avatar: {
// 		type: String,
// 	},
// 	date:{
// 		type: Date,
// 		default: Date.now
// 	},
// 	likes: [
// 		{
// 			user: {
// 				type: mongoose.Schema.Types.ObjectId,
// 				ref: "users",
// 			},
// 		},
// 	],

// 	comments:[
// 		{
// 			user: {
// 				type: mongoose.Schema.Types.ObjectId,
// 				ref: "users",
// 			},
// 			desc: {
// 				type: String,
// 				required: true,
// 			},
// 			auth: {
// 				type: String,
// 			},
// 			avatar: {
// 				type: String,
// 			},
// 			date:{
// 				type: Date,
// 				default: Date.now
// 			}
// 		}
// 	]
// });

// module.exports = Post = mongoose.model("blog", postSchema);






























const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    		type: String,
    		required: true,
    		trim: true,
    	},
  user: {
    type: Schema.Types.ObjectId
  },
  text: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  avatar: {
    type: String
  },
 
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('post', PostSchema);