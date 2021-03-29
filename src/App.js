
// MODULES
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// PAGES
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

// COMPONENTS
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';

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
                            <Route path="/" exact component={HomePage} />
                            <Route path="/sign-in" exact component={SignInPage} />
                            <Route path="/sign-up" exact component={SignUpPage} />
                        </Switch>
                    </main>
                    <Footer />
                </Router>
            </Provider>
        );
    }
}

export default App;
