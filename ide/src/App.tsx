import React from 'react';
import './styles/App.css';

// .. components import

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Editor from './pages/Editor/Index';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const isAuthenticated = false;

const App: React.FC = () => (
        <Router>
            <Switch>
                <Route path="/" render={(props) => isAuthenticated ? <Redirect to="/dashboard"/> : <Home/>} exact={true} />
                <Route path="/dashboard" component={Dashboard} exact={true} />
                <Route path="/app" component={Editor} />
            </Switch>
        </Router>
);

export default App;