
// MODULES
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// PAGES
import HomePage from './pages/HomePage';

// COMPONENTS
import Header from './components/HeaderComponent';

// STYLES
import './styles/App.scss';

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
                        <Route path="/" exact component={HomePage} />
                    </Switch>
                </main>
            </Router>
        );
    }
}

export default App;
