

// MODULES
import React from 'react'

// COMPONENTS
import AuthForm from '../../components/AuthFormComponent';

class SignInContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <>
                <AuthForm formType="signIn" />
            </>
        );
    }
}

export default SignInContainer;

