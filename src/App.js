
// NODE MODULES
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// COMPONENTS
import Header from './components/Header';
import Home from './components/Home';

// STYLES
import './App.scss';

class App extends React.Component {
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
            <Router>
                <Header />
                <main>
                    <Switch>
                        <Route path="/" exact component={Home} />
                    </Switch>
                </main>
            </Router>
        );
    }
}

export default App;
