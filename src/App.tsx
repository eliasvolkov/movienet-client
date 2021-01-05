import React from 'react';
import { observer } from 'mobx-react-lite';
import { SignInPage } from 'features/auth/SignInPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyles';
import { SignUpPage } from './features/auth/SignUpPage';
import { HomePage } from './features/home/HomePage';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';

export const App: React.FC = observer(() => {
    return (
        <>
            <GlobalStyles />
            <Router>
                <Switch>
                    <Route path="/signin" component={SignInPage} />
                    <Route path="/signup" component={SignUpPage} />
                    <PrivateRoute path="/home" component={HomePage} />
                    <PrivateRoute path="/movies" component={HomePage} />
                </Switch>
            </Router>
        </>
    );
});
