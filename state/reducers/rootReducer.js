import { combineReducers } from "redux";

import newMessageReducer from "./newMessageReducer";
//import setDataReducer from "./setDataReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  newMessageReducer: newMessageReducer,
  authInfo: authReducer
  //   dishes: setDataReducer
});

export default rootReducer;
