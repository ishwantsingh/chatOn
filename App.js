import React from "react";
import { Provider } from "react-redux";

import store from "./state/store";
import AppContainer from "./AppContainer";

export default class App extends React.Component {
  render() {
    console.log("boo");
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
