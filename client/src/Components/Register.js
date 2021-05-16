// rcc

import React, { useState } from "react";
import "./Regstyle.css";
import { Link , Redirect} from "react-router-dom";
import axios from "axios";
// ------------------ REDUCER
import { connect } from "react-redux";
import { setAlert } from "../actions/alert";
import { register } from "../actions/auth";
import PropTypes from "prop-types";

// const Register = ({ setAlert, register, isAuthenticated }) => {
// 	const [formData, setFormData] = useState({
// 	  name: '',
// 	  email: '',
// 	  password: '',
// 	  password2: ''
// 	});

// 	const { name, email, password, password2 } = formData;

// 	const onChange = (e) =>
// 	  setFormData({ ...formData, [e.target.name]: e.target.value });

// 	const Register = async (e) => {
// 	  e.preventDefault();
// 	  if (password !== password2) {
// 		setAlert('Passwords do not match', 'danger');
// 	  } else {
// 		register({ name, email, password });
// 	  }
// 	};

// ! OLD REG elly sha8ala
const Register = ({ setAlert, register, isAuthenticated }) => {
	// const [email, setemail] = useState("");
	// const [pass, setpass] = useState("");
	// const [confPass, setconfPass] = useState("");
	// const [name, setname] = useState("");
	const [msg,setmsg]=useState('');
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confPass: "",
	});
	const { name, email, password, confPass } = formData;
		const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });
	function Register(e) {
		e.preventDefault();
		
		if (password !== confPass) {
			setmsg('Passwords are not the same 	 ');
			// setAlert("Passwords are not the same 	 ", "danger");
		}
		// {let data = {
		// 	email: email,
		// 	password: pass,
		// 	name: name,
		// };
		else {
			register({ name, email, password });
		}
		// axios
		// 	.post("http://localhost:5001/register", data)
		// 	.then((resp) => {
		// 		if (resp) setmsg("user created");
		// 		else setmsg("wronG");

		// 	})
		// 	.catch((err) => setmsg("err"));
	}

	// ! END OF  OLD REG elly sha8ala
if(isAuthenticated){
	return <Redirect to="/posts" />
}
	return (
		<div className="container ">
			<section className="contact-from pt-4">
				<div className="container ">
					{/* <div class="row justify-content-center"> */}
					{/* <div class="col-12 col-md-8 col-lg-8 col-xl-6"> */}
					<div className="row mt-5">
						<div className="col-md-7 mx-auto">
							<div className="form-wrapper ">
								<div className="row">
									<div className="col-md-12 text-center">
										<h4>Registration </h4>
									</div>
								</div>
								<form _lpchecked="1" onSubmit={(e) => Register(e)}>
									<h2 className="p-x text-center">{msg}</h2>
									<div className="row align-items-center">
										<div className="col mt-4">
											<div className="form-group ">
												<input
													type="text"
													className="form-control"
													placeholder=" name"
													value={name}
													// onChange={(e) => {
													// 	setname(e.target.value);
													// }}
													onChange={onChange}
													name="name"
												/>
											</div>
										</div>
									</div>
									<div className="row align-items-center">
										<div className="col mt-4">
											<div className="form-group">
												<input
													type="email"
													className="form-control"
													placeholder="Email"
													value={email}
													// onChange={(e) => {
													// 	setemail(e.target.value);
													// }}
													onChange={onChange}
													name="email"
												/>
											</div>
										</div>
									</div>
									<div className="row align-items-center">
										<div className="col mt-4">
											<div className="form-group">
												<input
													type="password"
													className="form-control"
													placeholder="Password"
													// onChange={(e) => {
													// 	setpass(e.target.value);
													// }}
													onChange={onChange}
													value={password}
													name="password"
												/>
											</div>
										</div>
									</div>
									<div className="row align-items-center">
										<div className="col mt-4">
											<div className="form-group">
												<input
													type="password"
								 					className="form-control"
													placeholder="Confirm Password"
													// onChange={(e) => {
													// 	setconfPass(e.target.value);
													// }}
													onChange={onChange}
													value={confPass}
													name="confPass"
												/>
											</div>
										</div>
									</div>

									<div className="mt-3 text-center">
										<button className="btn btn-primary">Register</button>
									</div>
								</form>
								<hr></hr>
								<p className="text-center">
									Alredy a member? <Link to="/">Log in Here.</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* </div></div> */}
			</section>
		</div>
	);
};

Register.propTypes = {
	setAlert: PropTypes.func.isRequired,
	register: PropTypes.func.isRequired,
	isAuthenticated:PropTypes.bool,
};
const mapStateToProp = state =>({
    isAuthenticated : state.auth.isAuthenticated
})
export default connect(mapStateToProp, { setAlert, register })(Register);
