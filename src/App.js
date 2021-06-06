// MODULES
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

// COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingModal from './components/Modals/Loading';

// ROUTES
import Routes from './routes/Routes';

// STORE
import store from './state/store';

// STYLES
import './styles/index.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes />
        <Footer />
        <LoadingModal />
      </Router>
    </Provider>
  );
}

export default App;
