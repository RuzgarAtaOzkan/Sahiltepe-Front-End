// MODULES
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// ACTIONS
import globalActions from '../../state/global/actions';

// STYLES
import './AuthForm.scss';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      passwordVerify: '',
      rememberMe: false,
    };

    this.onSignIn = this.onSignIn.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignIn() {
    this.props.setLoading(true);
  }

  onSignUp() {}

  renderSignIn() {
    return (
      <>
        <div className="form">
          <h2>
            <Link to="/signup">Don't have an account?</Link>
          </h2>

          <input
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />

          <button onClick={this.onSignIn}>SIGN IN</button>

          <div className="config">
            <div className="remember-me">
              <input onClick={(e) => {}} type="checkbox" />
              <span>Remember Me</span>
            </div>
            <Link>Forgot Password</Link>
          </div>
        </div>
      </>
    );
  }

  renderSignUp() {
    return (
      <>
        <div className="form">
          <h2>
            <Link to="/sign-in">have an account?</Link>
          </h2>

          <input
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />

          <input
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password Verify"
            value={this.state.passwordVerify}
            onChange={(e) => this.setState({ passwordVerify: e.target.value })}
          />

          <button>SIGN UP</button>

          <div className="config">
            <div className="remember-me">
              <input type="checkbox" />
              <span>Remember Me</span>
            </div>

            <Link>Forgot Password</Link>
          </div>
        </div>
      </>
    );
  }

  configForm(formType) {
    switch (formType) {
      case 'login'.toUpperCase() || 'login':
      case 'signin':
        return this.renderSignIn();
      case 'register':
      case 'signup':
        return this.renderSignUp();
      default:
        return <h1>Form Type Prop is not Specified!</h1>;
    }
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <section id="auth-form">
        <img
          src="https://www.pxwall.com/wp-content/uploads/2018/06/Wallpaper%20autumn,%20forest,%20mountain,%204k,%20Nature%20461537031.jpg"
          alt="Background Sea"
        />
        {this.configForm(this.props.formType)}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.global.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setLoading: (payload) => {
      dispatch(globalActions.setLoading(payload));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
