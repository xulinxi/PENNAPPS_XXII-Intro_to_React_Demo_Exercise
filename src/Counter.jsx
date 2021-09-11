import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
  }
  Increase = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  Decrease = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  };
  render() {
    return (
      <>
        <Button variant="outlined" color="primary" onClick={this.Increase}>
          Increase
        </Button>
        <Button variant="contained" color="secondary" onClick={this.Decrease}>
          Decrease
        </Button>
        <h1>{this.state.clicks}</h1>
      </>
    );
  }
}
