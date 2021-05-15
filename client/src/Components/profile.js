import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

// import App from "./App"; //import into index.js file
// const { currentUserName } = require('../../../routes/mainroute');
import axios from "axios";
import setAuthToken from '../token/setAuthToken'
function Profile() {
    if(localStorage.token)
    {
        setAuthToken(localStorage.token);
        console.log("tttt =>", localStorage.token);
    }
	const [post, setpost] = useState([]);
	const [user, setuser] = useState([]);
    useEffect(() => {
       
		axios
			.get("http://localhost:5001/login")
			.then((res) => setuser(res.data))
			.catch((err) => console.log(err));
	});
	useEffect(() => {
        const headers = {
            'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjA5YjRhZjc3MzEyYTg0YTAwZDk0ZmU4In0sImlhdCI6MTYyMTAyOTM5MCwiZXhwIjoxNjIxNDYxMzkwfQ.oeiw2cnxM7zi1m4HzbQ2pfHo0cr2_cJdIlwKH-1YzRc',
        };
		axios
			.get("http://localhost:5001/profile/me",{headers})
			.then((res) => setpost(res.data))
			.catch((err) => console.log(err));
	});
	return (
		<div>
			<Navbar />
			<h1>Hello from profile </h1>
            <h2 className='p-x text-center'>{post.location}</h2>
            <h2 className='p-x text-center'>{user.name}</h2>
            <h1>KKKKK</h1>
			{/* {user.map((data, key) =>
			<Card className="my-5" sborder="primary">
				<Card.Header as="h5">{data.name}</Card.Header>
				<Card.Body>
					<Card.Text>
					{data.token}
					</Card.Text>
					<Button variant="primary" disabled>{data.email}</Button>
				</Card.Body>
			</Card>
            	)}  */}
		</div>
	);
}

export default Profile;
