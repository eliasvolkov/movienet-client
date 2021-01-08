import React, { useMemo } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { getTokenFromStorage } from '../../utils/token';
import { TOKEN_KEY } from '../../constants';

export const PrivateRoute = observer(({ component, ...rest }: any) => {
    const token = getTokenFromStorage(TOKEN_KEY);

    const isAuthorised = useMemo(() => {
        return token.length > 0;
    }, [token]);

    const routeComponent = (props: any) =>
        isAuthorised ? (
            React.createElement(component, props)
        ) : (
            <Redirect to={{ pathname: '/signin' }} />
        );
    return <Route {...rest} render={routeComponent} />;
});
