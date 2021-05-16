import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import PropTypes from "prop-types";
function Navbar({ auth: { isAuthenticated, loading }, logout }) {
	const authLinks = (
		<div>
			<nav className="navbar navbar-expand-md navbar-light bg-light">
				<div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<Link className="nav-link" to="/posts">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/add-post">
								Add Post
							</Link>
						</li>
					
					</ul>
				</div>
				<div className="mx-auto order-0">
					<Link className="navbar-brand mx-auto" to="/dashboard">
						Dashboard
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target=".dual-collapse2"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
				</div>
				<div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/profile">
								Profile
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/" onClick={logout}>
								Log Out
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);

	const guestLinks = (
		<div>
			<nav className="navbar navbar-expand-md navbar-light bg-light">
				<div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							{/* <Link className="nav-link" to="/posts">
								Home
							</Link> */}
						</li>
						<li className="nav-item">
							{/* <Link className="nav-link" to="/add-post">
								Add Post
							</Link> */}
						</li>
						
					</ul>
				</div>
				<div className="mx-auto order-0">
					{/* <a className="navbar-brand mx-auto" href="#">
						Blog
					</a> */}
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target=".dual-collapse2"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
				</div>
				<div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
					<ul className="navbar-nav ml-auto">
						
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Login
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
	return (
		<div>
			{/* <nav className="navbar navbar-expand-md navbar-light bg-light"> */}

				{!loading && (<Fragment>{ isAuthenticated? authLinks: guestLinks }</Fragment>)}


			{/* </nav> */}
		</div>
	);
}
Navbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProp = (state) => ({
	auth: state.auth,
});
export default connect(mapStateToProp, { logout })(Navbar);
