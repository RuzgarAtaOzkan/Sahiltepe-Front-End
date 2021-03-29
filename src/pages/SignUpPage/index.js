
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
        window.scrollTo(0, 0);
        return (
            <>
                <AuthFormComponent formType="signUp" />
            </>
        );
    }
}

export default SignUpContainer;
