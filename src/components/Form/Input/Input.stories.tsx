import React, { useState } from 'react';
import { Input } from './Input';

type Props = {
    value: string;
    onChange: (e: any) => void;
    onFocus?: (e: any) => void;
    onBlur?: (e: any) => void;
    type?: string;
    isFocused?: boolean;
    placeholder?: string;
    errorMessage?: string;
    isErrorShown?: boolean;
};
export const TextInput = ({
    value,
    onChange,
    placeholder = '',
    type = 'text',
    isErrorShown,
    errorMessage = '',
}: Props) => {
    const [isFocused, setIsFocused] = useState(false);

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
            placeholder={placeholder}
            isErrorShown={isErrorShown}
            errorMessage={errorMessage}
            isFocused={isFocused}
            onFocus={onFocus}
            onBlur={onBlur}
            type={type}
        />
    );
};
