import React from 'react';
import { observer } from 'mobx-react-lite';
import { SignInPage } from 'features/auth/SignInPage';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import { GlobalStyles } from './GlobalStyles';
import { SignUpPage } from './features/auth/SignUpPage';
import { Header } from './components/Header/Header';
import { HomePage } from './features/home/HomePage';

export const App: React.FC = observer(() => {
    return (
        <>
            <GlobalStyles />
            <Router>
                <Switch>
                    <Route path="/signin" component={SignInPage} />
                    <Route path="/signup" component={SignUpPage} />
                    <Route path="/home" component={HomePage} />
                    <Redirect from="/" to="/home" />
                </Switch>
            </Router>
        </>
    );
});
