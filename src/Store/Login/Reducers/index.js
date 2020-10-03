import * as Types from "../Types";

const initialState = {
  data: {
    username: null,
    password: null,
  },
  auth: {
    username: null,
    name: null,
    authenticated: false,
    profile: null,
  },
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_DATA_FORM_LOGIN:
      return { ...state, data: { ...state.data, ...action.payload } };
    case Types.SET_DATA_LOGIN: {
      return { ...state, auth: { ...state.auth, ...action.payload } };
    }
    default:
      return state;
  }
}
