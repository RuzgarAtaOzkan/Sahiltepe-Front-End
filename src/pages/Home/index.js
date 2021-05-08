
// MODULES
import React from 'react'

// COMPONENTS
import Parallax from './components/Parallax';
import Introduction from './components/Introduction';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        window.scrollTo(0, 0);
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

export default Home;

