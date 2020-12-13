import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from './Input';

const ExampledInput = () => {
    const [value, setValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const onChange = (e: any) => {
        if (e !== null) {
            setValue(e.target.value!);
        }
    };

    const onFocus = (e: any) => {
        setIsFocused(true);
    };

    const onBlur = (e: any) => {
        setIsFocused(false);
    };

    return (
        <Input
            value={value}
            onChange={onChange}
            placeholder="E-mail"
            isErrorShown={value.length > 0 && value.length < 3}
            errorMessage="Text is not valid"
            isFocused={isFocused}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
};

storiesOf('Input', module).add('normal state', () => <ExampledInput />);
