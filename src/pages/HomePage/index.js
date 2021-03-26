
// MODULES
import React from 'react'

// COMPONENTS
import ParallaxComponent from './components/ParallaxComponent';

class HomePageContainer extends React.Component {
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
                <ParallaxComponent />
            </>
        );
    }
}

export default HomePageContainer;

