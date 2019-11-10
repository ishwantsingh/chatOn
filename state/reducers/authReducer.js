const initialState = {
  authError: null,
  authCompleted: false,
  user: [],
  token: ""
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_SUCCESS":
      return {
        ...state,
        authCompleted: true,
        authError: null,
        user: action.payload.user,
        token: action.payload.token
      };
    case "AUTH_FAIL":
      return { ...state, authError: action.payload, authCompleted: false };
    default:
      return state;
  }
};

export default authReducer;
