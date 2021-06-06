// MODULES
import React from 'react';

// COMPONENTS
import AuthForm from '../components/AuthForm';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <AuthForm formType="signup" />
      </>
    );
  }
}

export default SignUp;
