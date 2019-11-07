import { combineReducers } from "redux";

import newMessageReducer from "./newMessageReducer";
//import setDataReducer from "./setDataReducer";

const rootReducer = combineReducers({
  newMessageReducer: newMessageReducer
  //   dishes: setDataReducer
});

export default rootReducer;
