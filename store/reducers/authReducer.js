import { SET_LOGGED_USER } from "../types/authTypes";

const initialState = {
    "loggedUser": {
        user: null,
        isLoggedIn: false, 
    }
};

const authReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_LOGGED_USER:
      return {
        loggedUser: {
            isLoggedIn: true,
            user: payload,
        }
      };
  }
  return state;
};

export default authReducer;
