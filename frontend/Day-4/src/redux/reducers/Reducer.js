// reducers.js

import { combineReducers } from 'redux';
import { LOGIN_SUCCESS, LOGOUT } from '../actions/actionTypes';

const initialState = {
  userEmail: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userEmail: action.payload.email,
      };
    case LOGOUT:
      return {
        ...state,
        userEmail: null,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
