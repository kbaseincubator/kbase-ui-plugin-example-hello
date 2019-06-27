import React from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "./redux/store";
import "./App.css";
import { AppBase, DevWrapper } from "@kbase/ui-lib";
import { Button } from "antd";
import View from "./View-redux";

const store = createReduxStore();

interface AppProps {}

interface AppState {}

export default class App<AppProps, AppState> extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <DevWrapper>
          <AppBase>
            <View />
          </AppBase>
        </DevWrapper>
      </Provider>
    );
  }
}
