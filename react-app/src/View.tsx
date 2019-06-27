import React from "react";
import "./View.css";
import { Button } from "antd";

export interface ViewProps {
  setTitle: (title: string) => void;
}

interface ViewState {}

export default class View extends React.Component<ViewProps, ViewState> {
  componentDidMount() {
    this.props.setTitle("Example Plugin - Hello!");
  }
  render() {
    return (
      <div className="App">
        <p>Hello, from the View!</p>
        <Button>Hi!</Button>
      </div>
    );
  }
}
