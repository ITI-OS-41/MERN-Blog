import axios from "axios";
import { PROFILE_ERROR, GET_PROFILE } from "./types";

//Get current USserS profileS

export const getCurrentUserProfile = () => async (dispatch) => {
	//! request from backend (routes)
	try {
		const res = await axios.get("http://localhost:5001/profile/me");
		dispatch({
			type: GET_PROFILE,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

// create or update 
export const createProfile = (formData, history, edit = false) => async dispatch => {
	try {
		const config = {
			header:{
				"Content-Type": "application/json",
			}
		}
		const res = await axios.post('http://localhost:5001/profile/', formData, config)
		dispatch({
			type: GET_PROFILE,
			payload: res.data
		});
		if (!edit){
			history.push('/dashboard');
		} 
	} catch (err) {
		console.log("err => ",err);
		const errors = err.response.data.errors;
		console.log("errorsss->  ",errors  );
		dispatch({
			type: PROFILE_ERROR,
			
			// payload: {  },
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
}