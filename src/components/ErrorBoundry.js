import React, { Component } from 'react';

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  // introduced in react 16
  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
