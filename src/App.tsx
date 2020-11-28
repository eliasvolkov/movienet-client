import React from 'react';
import { observer } from 'mobx-react-lite';
import { GlobalStyles } from './GlobalStyles';
import { H1 } from './components/atoms/Texts/H1';

export const App: React.FC = observer(() => {
    return (
        <div>
            <GlobalStyles />

            <h1
                style={{
                    fontFamily: 'Circe',
                    fontWeight: 100,
                    textAlign: 'center',
                }}>
                Movie Net
            </h1>
        </div>
    );
});
