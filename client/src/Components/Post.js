import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

// import App from "./App"; //import into index.js file
// const { currentUserName } = require('../../../routes/mainroute');
import axios from "axios";
function AddPost() {
	const [post, setpost] = useState([]);
	useEffect(() => {
		axios
			.get("http://localhost:5001/posts")
			.then((res) => setpost(res.data))
			.catch((err) => console.log(err));
	});
	return (
		// <div>
		// 	<Navbar />
		// 	{/* console.log("vvv"); */}
		// 	{/* console.log(currentUserName); */}
		// 	<h1>Posts</h1>
		// 	{post.map((data, key) =>
		// 		<div className="container">
		// 			<h2>{data.title}</h2>
		// 			<span className="badge badge-dark p-2">{data.auth}</span>
		// 			<h6>{data.desc}</h6>
		// 		</div>
		// 	)}
		// </div>
		<div>
			<Navbar />
			{post.map((data, key) =>
			<Card className="my-5" sborder="primary">
				<Card.Header as="h5">{data.title}</Card.Header>
				<Card.Body>
					<Card.Text>
					{data.text}
					</Card.Text>
					<Button variant="primary" disabled>{data.name}</Button>
				</Card.Body>
			</Card>
			)}
		</div>
	);
}

export default AddPost;
