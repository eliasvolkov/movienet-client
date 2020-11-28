import React from 'react';
import { observer } from 'mobx-react-lite';
import { useMst } from '../models/Root';

export const Counter: React.FC = observer(() => {
    const { counter } = useMst();
    const onClick = () => {
        counter.increment();
    };
    return <p onClick={onClick}>{counter.count}</p>;
});
