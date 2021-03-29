
// MODULES
import React from 'react';
import { Link } from 'react-router-dom';

// STYLES
import './AuthForm.scss';

class AuthFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            passwordVerify: ''
        }
    }

    renderSignIn() {
        return (
            <>
                <div className="form">
                    <h2>
                        <Link to="/sign-up" >Don't have an account?</Link>
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

                    <button>SIGN IN</button>

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

    renderSignUp() {
        return (
            <>
                <div className="form">
                    <h2>
                        <Link to="/sign-in" >have an account?</Link>
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
                        placeholder="Password"
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
            case 'login':
            case 'signIn':
                return this.renderSignIn();
            case 'register':
            case 'signUp':
                return this.renderSignUp();
            default:
                return <h1>Empty Form</h1>;
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <>
                <img src="https://www.pxwall.com/wp-content/uploads/2018/06/Wallpaper%20autumn,%20forest,%20mountain,%204k,%20Nature%20461537031.jpg" alt="Background Sea" />
                {this.configForm(this.props.formType)}
            </>
        );
    }
}

export default AuthFormComponent;

