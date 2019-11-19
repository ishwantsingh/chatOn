import { myFirebase } from "../../fb/config";
import firebase from "firebase";

// export const login = () => {
//   return dispatch => {
//     var provider = new firebase.auth.GoogleAuthProvider();
//     firebase
//       .auth()
//       .signInWithPopup(provider)
//       .then(function(result) {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         var token = result.credential.accessToken;
//         // The signed-in user info.
//         var user = result.user;
//         // ...
//       })
//       //   .then(() => {
//       //       dispatch({type: "AUTH_SUCCESS", payload: { token, user}})
//       //   })
//       .catch(function(error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // The email of the user's account used.
//         var email = error.email;
//         // The firebase.auth.AuthCredential type that was used.
//         var credential = error.credential;
//         // ...
//       });
//     firebase
//       .auth()
//       .getRedirectResult()
//       .then(function(result) {
//         if (result.credential) {
//           // This gives you a Google Access Token. You can use it to access the Google API.
//           var token = result.credential.accessToken;
//           // ...
//         }
//         // The signed-in user info.
//         var user = result.user;
//         dispatch({ type: "AUTH_SUCCESS", payload: { user, token } });
//       })
//       .catch(function(error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // The email of the user's account used.
//         var email = error.email;
//         // The firebase.auth.AuthCredential type that was used.
//         var credential = error.credential;
//         // ...
//         dispatch({
//           type: "AUTH_FAIL",
//           payload: { err: `${errorCode}: ${errorMessage}` }
//         });
//       });
//   };
// };

// export const logout = () => {
//   return () => {
//     firebase
//       .auth()
//       .signOut()
//       .then(function() {
//         // Sign-out successful.
//       })
//       .catch(function(error) {
//         // An error happened.
//         console.log(error);
//       });
//   };
// };

export const login = () => dispatch => {
  var provider = new firebase.auth.GoogleAuthProvider();
  myFirebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
      console.log("user", user);
      dispatch({ type: "AUTH_SUCCESS", payload: { token, user } });
    })
    //   .then(() => {
    //       dispatch({type: "AUTH_SUCCESS", payload: { token, user}})
    //   })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  myFirebase
    .auth()
    .getRedirectResult()
    .then(function(result) {
      if (result.credential) {
        var token = result.credential.accessToken;
      }
      var user = result.user;
      dispatch({ type: "AUTH_SUCCESS", payload: { user, token } });
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      dispatch({
        type: "AUTH_FAIL",
        payload: { err: `${errorCode}: ${errorMessage}` }
      });
    });
};

export const logout = () => dispatch => {
  myFirebase
    .auth()
    .signOut()
    .then(function() {
      console.log("signout success");
    })
    .catch(function(error) {
      // An error happened.
      console.log(error);
    });
};

export const verifyAuth = () => dispatch => {
  myFirebase.auth().onAuthStateChanged(user => {
    if (user !== null) {
      console.log("auth change user", user);
    }
    console.log("okie dokie");
  });
};
