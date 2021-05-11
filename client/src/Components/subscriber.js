import React, { useState, useEffect } from "react";
import axios from "axios";
import postData from "./fetch";
// import './Loginstyle.css';
import { Link, useHistory } from "react-router-dom";
import "./Regstyle.css";

const LongPull = (props) => {
	const [allmsgs, setallmsgs] = useState([]);
	const [msg, setmsg] = useState("");

	const submitfun = (e) => {
		e.preventDefault();
		postData("http://localhost:5001/msgs", { msg }).then((res) => {
			// console.log("res =>" ,res);
			setmsg('');
			// res.json())
			// .then (console.table);
		});
	};

	useEffect(() => {
        // console.log("b4 fetch");
		fetch("http://localhost:5001/msgs/subscriber")
			.then((res) => res.json())
			.then((data) => {
                console.log("data => " ,data);
				setallmsgs(allmsgs.concat(data));
			});
	}, [allmsgs]);

	return (
		<div className="container">
			<section className="contact-from pt-4">
				<div className="container">
					<div className="row mt-5">
						<div className="col-md-7 mx-auto">
							<div className="form-wrapper">
								<div className="row">
									<div className="col-md-12 text-center">
										<h4>Login </h4>
									</div>
								</div>
								<form _lpchecked="1" onSubmit={submitfun}>
									{/* <h2 className='p-x text-center'>{msg}</h2> */}
									<div className="row align-items-center">
										<div className="col mt-4">
											<div className="form-group">
												<input
													type="text"
													className="form-control"
													placeholder="text"
													value={msg}
													onChange={(e) => {
														setmsg(e.target.value);
													}}
												/>
											</div>
										</div>
									</div>
									<div>
										<h1>All Msgs</h1>
										<ul>
											{allmsgs.map((m, i) => (
												<li key={i}>{m.msg} </li>
											))}
										</ul>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default LongPull;
