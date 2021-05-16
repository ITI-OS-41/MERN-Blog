import React, { Fragment, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile } from '../actions/profile';

const CreateProfile = ({createProfile, history}) => {
	const [formData, setFormData] = useState({
		company: "",
		website: "",
		location: "",
		status: "",
		skills: "",
		githubusername: "",
		status:"",
	});

	// };

	const { company, website, skills, githubusername, location, status } =
		formData;

	//   const [displaySocialInputs, toggleSocialInputs] = useState(false);

	//   useEffect(() => {
	//     if (!profile) getCurrentProfile();
	//     if (!loading && profile) {
	//       const profileData = { ...initialState };
	//       for (const key in profile) {
	//         if (key in profileData) profileData[key] = profile[key];
	//       }
	//       for (const key in profile.social) {
	//         if (key in profileData) profileData[key] = profile.social[key];
	//       }
	//       if (Array.isArray(profileData.skills))
	//         profileData.skills = profileData.skills.join(', ');
	//       setFormData(profileData);
	//     }
	//   }, [loading, getCurrentProfile, profile]);

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	  const onSubmit = e => {
	    e.preventDefault();
	    createProfile(formData, history);
	  };

	return (
		<Fragment>
			<div className="container">
				<section className="contact-from pt-4">
					<div className="container">
						<div className="row mt-5">
							<div className="col-md-7 mx-auto">
								<div className="form-wrapper">
									<div className="row">
										<div className="col-md-12 text-center">
											<h4> Profile  Info</h4>
										</div>
									</div>
									<form _lpchecked="1" onSubmit={e =>onSubmit(e)}>
										{/* <h2 className='p-x text-center'>{msg}</h2> */}
										<div className="row align-items-center">
											<div className="col mt-4">
												<div className="form-group">
													<input
														type="text"
														className="form-control"
														placeholder="Status"
														value={status}
                                                        name="status"
														onChange={(e) => onChange(e)}
													/>
												</div>
											</div>
										</div>
										<div className="row align-items-center">
											<div className="col mt-4">
												<div className="form-group">
													<input
														type="text"
														className="form-control"
														placeholder="Skills"
														value={skills}
                                                        name="skills"
														onChange={(e) => onChange(e)}
													/>
												</div>
											</div>
										</div>
										<div className="row align-items-center">
											<div className="col mt-4">
												<div className="form-group">
													<input
														type="text"
														className="form-control"
														placeholder="website"
														value={website}
                                                        name="website"
														onChange={(e) => onChange(e)}
													/>
												</div>
											</div>
										</div>
										<div className="row align-items-center">
											<div className="col mt-4">
												<div className="form-group">
													<input
														type="text"
														className="form-control"
														placeholder="company"
														name="company"
														value={company}
														onChange={(e) => onChange(e)}
													/>
												</div>
											</div>
										</div>
										<div className="row align-items-center">
											<div className="col mt-4">
												<div className="form-group">
													<input
														type="text"
														className="form-control"
														placeholder="location"
														name="location"
														value={location}
														onChange={(e) => onChange(e)}
													/>
												</div>
											</div>
										</div>
										<div className="row align-items-center">
											<div className="col mt-4">
												<div className="form-group">
													<input
														type="text"
														className="form-control"
														placeholder="githubusername"
														name="githubusername"
														value={githubusername}
														onChange={(e) => onChange(e)}
													/>
												</div>
											</div>
										</div>
									
										<div className="mt-3 text-center">
											<button className="btn btn-primary">Submit</button>
										</div>
									</form>
									<hr></hr>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Fragment>
	);
};

CreateProfile.propTypes = {
	createProfile: PropTypes.func.isRequired,
	getCurrentProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
};

// const mapStateToProps = (state) => ({
// 	profile: state.profile,
// });

export default connect(null,{createProfile}) (withRouter(CreateProfile));
