import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCurrentUserProfile } from "../actions/profile";
import  Navbar  from "./Navbar";

// import App from "./App"; //import into index.js file
// const { currentUserName } = require('../../../routes/mainroute');
import axios from "axios";
import setAuthToken from "../token/setAuthToken";
const Profile = ({ getCurrentUserProfile, auth: {user}, profile: {profile, loading} }) => {
	useEffect(() => {
		getCurrentUserProfile();
	}, [getCurrentUserProfile]);
// function Profile() {
	// if (localStorage.token) {
	// 	setAuthToken(localStorage.token);
	// 	console.log("tttt =>", localStorage.token);
	// }
	// const [post, setpost] = useState([]);
	// const [user, setuser] = useState([]);
	// useEffect(() => {
	// 	axios
	// 		.get("http://localhost:5001/login")
	// 		.then((res) => setuser(res.data))
	// 		.catch((err) => console.log(err));
	// });
	// useEffect(() => {
	// 	const headers = {
	// 		"x-auth-token":
	// 			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjA5YjRhZjc3MzEyYTg0YTAwZDk0ZmU4In0sImlhdCI6MTYyMTAyOTM5MCwiZXhwIjoxNjIxNDYxMzkwfQ.oeiw2cnxM7zi1m4HzbQ2pfHo0cr2_cJdIlwKH-1YzRc",
	// 	};
	// 	axios
	// 		.get("http://localhost:5001/profile/me", { headers })
	// 		.then((res) => setpost(res.data))
	// 		.catch((err) => console.log(err));
	// });

	return  (
		<div>
			{/* <Navbar />
			<h1>Hello from profile </h1>
            <h2 className='p-x text-center'>{post.location}</h2>
            <h2 className='p-x text-center'>{user.name}</h2>
            <h1>KKKKK</h1> */}
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

			<div className="row py-5 px-4">
				<div className="col-md-5 mx-auto">
					{/* Profile widget */}
					<div className="bg-white shadow rounded overflow-hidden">
						<div className="px-4 pt-0 pb-4 cover">
							<div className="media align-items-end profile-head">
								<div className="profile mr-3 mt-5">
									
									<img
										src={user && profile.user.avatar}
										alt="..."
										width={130}
										className="rounded mb-2 img-thumbnail"
									/>
									<h3>
										Welcom {user && user.name}
									</h3>
									<a href="#" className="btn btn-outline-dark btn-sm btn-block">
										Edit profile
									</a>
								
							</div>
						</div>
						
						<div className="px-4 py-3">
							<h3 className="mb-0 ">About</h3>
							<div className="p-4 rounded shadow-sm bg-light">
								<span className="font-italic mb-0"><span  class="text-primary">Name: </span> {user && profile.location}</span>
								<p className="font-italic mb-0"><span class="text-primary">Skills: </span> {user && profile.skills}</p>
								<p className="font-italic mb-0"><span class="text-primary">Website URL: </span> {user && profile.website}</p>
								<p className="font-italic mb-0"><span class="text-primary">Github username: </span>{user && profile.githubusername}</p>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>
		</div>
	);
}



Profile.propTypes = {
	getCurrentUserProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentUserProfile })(Profile);


