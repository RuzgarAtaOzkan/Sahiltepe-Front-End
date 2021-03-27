
// MODULES
import React from 'react'

// COMPONENTS
import Announcements from './components/AnnouncementsComponent';
import Parallax from './components/ParallaxComponent';

class HomePageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <Parallax />
                <Announcements />
            </>
        );
    }
}

export default HomePageContainer;

