

// MODULES
import React from 'react'

// COMPONENTS
import AuthForm from '../../components/AuthForm';

class SignIn extends React.Component {
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
                <AuthForm 
                    formType="signin" 
                />
            </>
        );
    }
}

export default SignIn;

