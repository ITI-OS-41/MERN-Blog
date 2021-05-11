// rcc
import React, { useState } from "react";
import "./Regstyle.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
	const [email, setemail] = useState("");
	const [pass, setpass] = useState("");
	const [name, setname] = useState("");
	function Register(e) {
		let data = {
			email: email,
			password: pass,
			name: name,
		};
		axios
			.post("http://localhost:5001/register", data)
			.then((resp) => {
				if (resp) alert("done");
				else alert("wronG");
			})
			.catch((err) => console.log(err));
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
									<div className="row align-items-center">
										<div className="col mt-4">
											<div className="form-group ">
												<input
													type="text"
													className="form-control"
													placeholder=" name"
													value={name}
													onChange={(e) => {
														setname(e.target.value);
													}}
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
													onChange={(e) => {
														setemail(e.target.value);
													}}
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
													onChange={(e) => {
														setpass(e.target.value);
													}}
													value={pass}
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
}

export default Register;
