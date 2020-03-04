import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_TRUCKS = "UPDATE_TRUCKS";
export const ADD_TRUCK = "ADD_TRUCK";
export const SET_ERROR = "SET_ERROR";

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
      .get("https://lftt3.herokuapp.com/api/trucks")
      .then(res => {
        console.log("rd: getData, trucks array: ", res.data);
        dispatch({ type: UPDATE_TRUCKS, payload: res.data });
      })
      .catch(err => {
        // console.log("error fetching data from api. err: ", err);
        dispatch({ type: SET_ERROR, payload: "error fetching data from api", err });
      })
  }

  export const postData = (item) => dispatch => {
    axiosWithAuth()
      .post("/api/trucks/add", item)
      .then(res => {
        // console.log("rd: actions index: postData .then: ", res);
        // dispatch({ type: FETCH_DATA });
        dispatch({type: ADD_TRUCK, payload: res.data })
      })
      .catch(err => {
        // console.log("POST err: ", err);
        dispatch({ type: SET_ERROR, payload: "error posting data to api", err });
      })
  }