import { myFirebase, db } from "../../fb/config";
// import firebase from "firebase";

export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAIL = "AUTH_FAIL";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const VERIFY_REQUEST = "VERIFY_REQUEST";
export const VERIFY_SUCCESS = "VERIFY_SUCCESS";

const requestLogin = () => {
  return {
    type: LOGIN_REQUEST
  };
};

const receiveLogin = user => {
  return {
    type: LOGIN_SUCCESS,
    user
  };
};

const loginError = () => {
  return {
    type: LOGIN_FAILURE
  };
};

const requestLogout = () => {
  return {
    type: LOGOUT_REQUEST
  };
};

const receiveLogout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

const logoutError = () => {
  return {
    type: LOGOUT_FAILURE
  };
};

const verifyRequest = () => {
  return {
    type: VERIFY_REQUEST
  };
};

const verifySuccess = () => {
  return {
    type: VERIFY_SUCCESS
  };
};

const authSuccess = user => {
  return {
    type: "AUTH_SUCCESS",
    payload: { user }
  };
};

export const login = (email, password) => dispatch => {
  dispatch(requestLogin());
  myFirebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch(authSuccess(user));
      dispatch(receiveLogin(user));
    })
    .catch(error => {
      //Do something with the error if you want!
      console.log("error", error);
      dispatch(loginError());
    });
  //   .then(() => {
  //       dispatch({type: "AUTH_SUCCESS", payload: { token, user}})
  //   })
  // .catch(function(error) {
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   var email = error.email;
  //   var credential = error.credential;
  // });
  // myFirebase
  //   .auth()
  //   .getRedirectResult()
  //   .then(function(result) {
  //     if (result.credential) {
  //       var token = result.credential.accessToken;
  //     }
  //     var user = result.user;
  //     dispatch({ type: "AUTH_SUCCESS", payload: { user, token } });
  //   })
  //   .catch(function(error) {
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     var email = error.email;
  //     var credential = error.credential;
  //     dispatch({
  //       type: "AUTH_FAIL",
  //       payload: { err: `${errorCode}: ${errorMessage}` }
  //     });
  //   });
};

export const logout = () => dispatch => {
  myFirebase
    .auth()
    .signOut()
    .then(function() {
      console.log("signout success");
      dispatch(receiveLogout());
    })
    .catch(function(error) {
      // An error happened.
      console.log("signout error", error);
      dispatch(logoutError());
    });
};

export const verifyAuth = () => dispatch => {
  dispatch(verifyRequest());
  myFirebase.auth().onAuthStateChanged(user => {
    if (user !== null) {
      console.log("auth change user", user);
      dispatch(receiveLogin(user));
    }
    console.log("okie dokie");
    dispatch(verifySuccess());
  });
};

export const signup = (email, password, firstName, lastName) => dispatch => {
  myFirebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(resp => {
      console.log("SIGNUP_SUCCESS", resp);
      return db
        .collection("users")
        .doc(resp.user.uid)
        .set({
          firstName: firstName,
          lastName: lastName,
          initials: firstName[0] + lastName[0]
        });
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("SIGNUP_ERROR", errorMessage);
      // ...
    });
};
