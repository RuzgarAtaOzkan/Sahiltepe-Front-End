
// MODULES
import React from 'react'

// COMPONENTS
import AuthFormComponent from '../../components/AuthFormComponent';

class SignUpContainer extends React.Component {
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
                <AuthFormComponent formType="signUp" />
            </>
        );
    }
}

export default SignUpContainer;
