
// MODULES
import React from 'react'

// COMPONENTS
import Parallax from './components/ParallaxComponent';
import IntroductionComponent from './components/IntroductionComponent';

class HomePageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <Parallax />
                <IntroductionComponent />
            </>
        );
    }
}

export default HomePageContainer;

