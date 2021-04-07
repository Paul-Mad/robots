import React, { Component, ReactNode } from "react";

interface IErrorProps {
  children?: ReactNode;
}

interface IErrorState {
  hasError: boolean;
}

class Error extends Component<IErrorProps, IErrorState> {
  constructor(props: IErrorProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(error: any, info: any) {
    this.setState({ hasError: true });
  }
  render(): ReactNode {
    const { children } = this.props;
    return this.state.hasError ? <h1>Oooops. That is not good!</h1> : children;
  }
}

export default Error;
