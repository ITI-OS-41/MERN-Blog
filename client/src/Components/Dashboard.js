import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCurrentUserProfile } from "../actions/profile";
import  Navbar  from "./Navbar";
import { Link } from "react-router-dom";
const Dashboard = ({ getCurrentUserProfile, auth : {user}, profile : {profile, loading} }) => {
	useEffect(() => {
		getCurrentUserProfile();
	}, [getCurrentUserProfile]);
	return (

		<div>
			<h1> Welcom {user && user.name}</h1>
			{/* <Navbar /> */}
			{/* <div>Dashhhh</div> */}
			<Link to="/create-profile" > Create Profile</Link>
			
		</div>
	);
};

Dashboard.propTypes = {
	getCurrentUserProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentUserProfile })(Dashboard);
