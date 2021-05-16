import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCurrentUserProfile } from "../actions/profile";
import Navbar from "./Navbar";
import { Badge, Button, Row } from "react-bootstrap";

import { Link } from "react-router-dom";
const Dashboard = ({
	getCurrentUserProfile,
	auth: { user },
	profile: { profile, loading },
}) => {
	useEffect(() => {
		getCurrentUserProfile();
	}, [getCurrentUserProfile]);
	return (
		<div>
			<Row className="justify-content-md-center">
				<h1> Welcom {user && user.name}</h1>
				{/* <Badge variant="warning"><Link to="/create-profile" > Create Profile</Link></Badge> */}
			</Row>
			<Row className="justify-content-md-center">
				<Button variant="warning" size="lg">
					<Link to="/create-profile" style={{ color: "#FFF" }}>
						
						Create Profile
					</Link>
				</Button>
				{/* <Navbar /> */}
				{/* <div>Dashhhh</div> */}
				<span className="badge badge-success"></span>
			</Row>
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
