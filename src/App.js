
// MODULES
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// PAGES
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

// COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';

// STYLES
import './styles/App.scss';

import store from './state/store';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        console.clear();
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Header />
                    <main>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/sign-in" component={SignIn} />
                            <Route path="/sign-up" component={SignUp} />
                        </Switch>
                    </main>
                    <Footer />
                </Router>
            </Provider>
        );
    }
}

export default App;
