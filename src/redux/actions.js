import { ADD_CITY } from "./actionTypes";


export const addCity = content => ({
  type: ADD_CITY,
  payload: {
       content
  }
});
