const express = require("express");

const router = express.Router();
const auth = require("../middleware/auth");
const Profile = require("../Model/Profile");
const User = require("../Model/user");
const { check, validationResult } = require("express-validator");

//! get profle
router.get("/me", auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({ user: req.user.id }).populate(
			"user",
			["name", "avatar"]
		);
		if (!profile) {
			return res.status(400).json({ msg: "this user have no profile" });
		}

		res.json(profile);
	} catch (error) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

//! create and update user profile
router.post(
	"/",
	[
		auth,
		[
			check("status", "Status is required").notEmpty(),
			check("skills", "Skills is required").notEmpty(),
		],
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		//! --- 
		// const userId = req.user._id;
		//! - 
		
		// destructure the request
		const { company, website, location, bio, githubusername, skills,status } =
			req.body;

		// build a profile
		const profileFields = {};
		profileFields.user = req.user.id;
		if (company) profileFields.company = company;
		if (website) profileFields.website = website;
		if (location) profileFields.location = location;
		if (status) profileFields.status = status;
		if (bio) profileFields.bio = bio;
		if (githubusername) profileFields.githubusername = githubusername;
		if (skills) {
			profileFields.skills = skills.split(",").map((skill) => skill.trim());
		}

		// console.log(profileFields.skills);
		// res.send("hrllo");
		// Build socialFields object
		const socialFields = {};

		try {
			let profile = await Profile.findOne({ user: req.user.id });
			if (profile) {
				let profile = await Profile.findOneAndUpdate(
					{ user: req.user.id },
					{ $set: profileFields },
					{ new: true, upsert: true, setDefaultsOnInsert: true }
				);
				return res.json(profile); //!return entire profile
			}
            profile = new Profile(profileFields);
            await profile.save();
            res.json(profile);
		} catch (err) {
			console.error(err.message);
			return res.status(500).send("Server Error");
		}
	}
);
module.exports = router;
