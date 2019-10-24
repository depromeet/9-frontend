import React, { Fragment, Component } from 'react';
import LoginForm from '../../components/LoginForm';
import Hero from '../../components/Hero';

class Login extends Component {
  render() {
    return (
      <Fragment>
        <LoginForm />
        <Hero />
      </Fragment>
    );
  }
}

export default Login;
