

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

