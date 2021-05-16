const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");

const User = require("../Model/user");
const Post = require("../Model/postmodel");

//! don't forget that u have to be logged in to have a post :(

router.post(
	"/",
	auth,
	check("text", "Text is required").notEmpty(),
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		try {
			const user = await User.findById(req.user.id).select("-password");
			// console.log("name -> ",req.body.name);
			// console.log("usr -> ",user.name);
			const newPost = new Post({
       		 title: req.body.title,
				text: req.body.text,
				name: user.name,
				// name: req.body.name,
				avatar: user.avatar,
				user: req.user.id,
			});

			const post = await newPost.save();

			res.json(post);
		} catch (err) {
			console.error(err.message);
			// console.log("enter err");
			res.status(500).send("Server Error");
		}
	}
);
//! To get all Posts, sha8ala thank god ♥
router.get("/", auth, async (req, res) => {
	try {
		const posts = await Post.find().sort({ date: -1 });
		res.json(posts);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

//! To get specific POST By ID

router.get("/:id", auth, async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
    console.log("req.user === > ", req.user);
		if (!post) {
			return res.status(404).json({ msg: "Post not found" });
		}

		res.json(post);
	} catch (err) {
		console.error(err.message);

		res.status(500).send("Server Error");
	}
});


//! elete a post by ID 
router.delete('/:id',auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    console.log("post-> ",post.user);
    console.log("poscct-> ",post.name);
    console.log("req.params.id-> ",req.params.id);
    console.log("req.user._id reqBody-> ",req.User); ///// undefined
    console.log("post.user-> ",post.user);
    

    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    // Check user
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await post.remove();

    res.json({ msg: 'Post removed' });
  } catch (err) {
    console.log("rrr");
    // console.log("user ");
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

module.exports = router;
