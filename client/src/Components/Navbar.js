import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
	return (
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
						{/* <li className="nav-item">
							<a className="nav-link" href="#">
								Link
							</a>
						</li> */}
						{/* <li className="nav-item">
							<a className="nav-link" href="#">
								Link
							</a>
						</li> */}
						{/* <li className="nav-item">
							<a className="nav-link" href="#">
								Link
							</a>
						</li> */}
					</ul>
				</div>
				<div className="mx-auto order-0">
					<a className="navbar-brand mx-auto" href="#">
						Blog
					</a>
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
							<Link className="nav-link" to="#">
								Hello USer....
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="#">
								Log Out
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
