const express = require("express");
const route = express.Router();
const User = require("../Model/user");
const wt = require("jsonwebtoken");
const Blog = require("../Model/postmodel");
const { JWT_SECRET } = require("../keys");
const { check, validationResult } = require("express-validator");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
//Reg Rote
route.post(
	"/register",
	[
		check("name", "Name is required").not().isEmpty(),
		check("email", "Please enter a valid mail"),
		check(
			"password",
			"please enter a password with 6 or more characters"
		).isLength({ min: 6 }),
	],

	//// Async functions return a Promise by default, so you can rewrite any callback based function to use Promises, then await their resolution. You can use the util. promisify function in Node. js to turn callback-based functions to return a Promise-based ones.

	async (req, res) => {
		const errors = validationResult(req);
		let register = new User(req.body);
		// register.save().then((err, docs) => {
		// if (err) res.send(err);
		// else res.send("Successfully Registered");
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { name, email, password } = req.body;
		try {
			let user = await User.findOne({ email });
			//Check user existence
			if (user) {
				res.status(400).json({ errors: [{ msg: "user already exist " }] });
			}
			const avatar = gravatar.url(email, {
				s: "200",
				r: "pg",
				d: "mm",
			});
			user = new User({
				name,
				email,
				avatar,
				password,
			});
			// encrypt pass
			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(password, salt);
			await user.save();

			// Return jsonwebtoken
			const playload = {
				user: {
					id: user.id,
				},
			};
			jwt.sign(
				playload,
				config.get("jwtSecret"),
				{ expiresIn: 360000 },
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				}
			);
		} catch (err) {
			console.error(err.message);
			res.status(500).send("server error");
		}
	}
);

// route.post("/login", (req, res) => {
// 	User.findOne({
// 		email: req.body.email,
// 	})
// 		.then((found) => {
// 			console.log("user Exist ya mony");
// 			// const token = jwt.sign({_id:found._id},JWT_SECRET)
// 			// res.json(found.name)
// 			// const currentUserName = found.name
// 			// console.log(found.name);

// 			if (found.password === req.body.password) {
// 				res.send("1");
// 			} else {
// 				res.send("0");
// 			}
// 		})
// 		.catch((err) => res.send("User Not Found.."));

// 		const payload = {
// 			user: {
// 			  id: user.id
// 			}
// 		  };

// });

// ---------------------

route.post(
	"/login",
	check("email", "Please include a valid email").isEmail(),
	check("password", "Password is required").exists(),
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { email, password } = req.body;

		try {
			let user = await User.findOne({ email });

			if (!user) {
				return res
					.status(400)
					.json({ errors: [{ msg: "Invalid Credentials" }] });
			}

			const isMatch = await bcrypt.compare(password, user.password);

			if (!isMatch) {
				return res
					.status(400)
					.json({ errors: [{ msg: "Invalid Credentials" }] });
			}

			const payload = {
				user: {
					id: user.id,
				},
			};

			jwt.sign(
				payload,
				config.get("jwtSecret"),
				{ expiresIn: "5 days" },
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				}
			);
		} catch (err) {
			console.error(err.message);
			console.log("00000");
			res.status(500).send("Server error");
		}
	}
);

// ---------------

// get posts
route.get("/posts", (req, res) => {
	Blog.find((err, data) => {
		if (err) res.json(err);
		else res.json(data);
	});
});

// /add post
route.post("/add-post", (req, res) => {
	let adding = new Blog(req.body);
	adding.save((err, docs) => {
		if (err) res.json("Try again");
		else res.json("Posted :D");
	});
});

module.exports = route;
