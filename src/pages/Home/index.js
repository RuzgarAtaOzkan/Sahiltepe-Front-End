
// MODULES
import React from 'react'

// COMPONENTS
import Parallax from './components/Parallax';
import Introduction from './components/Introduction';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <Parallax />
                <Introduction />
            </>
        );
    }
}

export default HomePage;

