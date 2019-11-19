import { applyMiddleware, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import rootReducer from "./reducers/rootReducer";
import { verifyAuth } from "./actions/authAction";
import devToolsEnhancer from "remote-redux-devtools";

//export default store = createStore(rootReducer, devToolsEnhancer());

export default function configureStore(persistedState) {
  const store = createStore(
    rootReducer,
    persistedState,
    compose(
      applyMiddleware(thunkMiddleware),
      devToolsEnhancer()
    )
  );
  store.dispatch(verifyAuth());
  return store;
}
