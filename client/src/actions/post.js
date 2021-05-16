// import api from '../token/setAuthToken';
// import { setAlert } from './alert';
import axios from "axios";

import {
  GET_POSTS,
  POST_ERROR,

} from './types';

// Get posts
export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:5001/posts');

    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};