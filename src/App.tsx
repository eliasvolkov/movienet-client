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

export const App: React.FC = observer(() => {
    return (
        <>
            <GlobalStyles />
            <Router>
                <Header />
                <Switch>
                    <Route path="/signin" component={SignInPage} />
                    <Route path="/signup" component={SignUpPage} />
                    <Redirect from="/" to="/signin" />
                </Switch>
            </Router>
        </>
    );
});
