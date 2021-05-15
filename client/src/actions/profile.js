import axios from "axios";
import { PROFILE_ERROR, GET_PROFILE } from "./types";

//Get current USserS profileS

export const getCurrentUserProfile = () => async (dispatch) => {
	//! request from backend (routes)
	try {
		const res = await axios.get("/profile/me");
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
