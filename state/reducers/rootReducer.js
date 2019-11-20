import { combineReducers } from "redux";

import newMessageReducer from "./newMessageReducer";
import setDataReducer from "./setDataReducer";
import authReducer from "./authReducer";
import { sendMessageReducer } from "./newMessageReducer";

const rootReducer = combineReducers({
  newMessageReducer: newMessageReducer,
  authInfo: authReducer,
  data: setDataReducer,
  sentMessageStatus: sendMessageReducer
});

export default rootReducer;
