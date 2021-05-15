import axios from "axios";
import { setAlert } from "./alert";
import { REGISTER_FAIL, REGISTER_SUCCESS,USER_LOADED,AUTH_ERROR } from "./types";
import setAuthToken from '../token/setAuthToken';
//load user
export const loadUser = () => async dispatch => {
	const config = {
		headers: {
			"x-auth-token": localStorage.toke,
		},
	};
	if(localStorage.token)
	{
		setAuthToken(localStorage.token);
	}
	try {
		const res = await axios.get('http://localhost:5001/login');
		dispatch({
			type: USER_LOADED,
			payload: res.data,
		});
	} catch (err) {
		console.log("AUTH_ERROR => ",err);
		dispatch({
			type: AUTH_ERROR,
		});
	}
}

// Register user
export const register =
	({ name, email, password }) =>
	async (dispatch) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const body = JSON.stringify({ name, email, password });

		try {
			// const res = await axios.post("/register", body, config);
			const res = await axios.post("http://localhost:5001/register", body, config);
			console.log("res.data   ->> ", res.data);
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data,
			});
		} catch (err) {
			const errors = err.response.data.errors;
			console.log("errorsss->  ",errors  );
			if (errors) {
				errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
			}
			// const res = await axios.post("http://localhost:5001/register", body, config);
			console.log("errrrrrrrrr-> ",err);
			dispatch({
				type: REGISTER_FAIL,
				// payload: res.data
			});
		}
	};
