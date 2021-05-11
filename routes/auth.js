const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../Model/user");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

// router.get('/', auth, (req,res) => res.send('Auth route'));
router.get("/", auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select("-password");
		res.json(user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("server error");
	}
});

//* POST
router.post(
	"/",
	[
	
		check("email", "Please enter a valid mail"),
		check("password", "password is required").exists(),
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

		const { email, password } = req.body;
		try {
			let user = await User.findOne({ email });
			//Check user existence
			if (!user) {
				return res
					.status(400)
					.json({ errors: [{ msg: "Invalid credentials" }] });
			}

			const isMtch = await bcrypt.compare(password, user.password);

			if (!isMtch) {
				return res
					.status(400)
					.json({ errors: [{ msg: "Invalid credentials" }] });
			}

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
module.exports = router;
