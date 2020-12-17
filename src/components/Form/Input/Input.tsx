import React from 'react';
import styled from 'styled-components/macro';

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

export const Input: React.FC<Props> = ({
    value,
    onChange,
    onFocus = () => {},
    onBlur = () => {},
    type = 'text',
    placeholder = '',
    errorMessage = '',
    isFocused = false,
    isErrorShown = false,
}: Props) => {
    return (
        <Wrapper>
            <StyledInput
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                isFocused={isFocused}
                isError={isErrorShown}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            {isErrorShown && (
                <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-flow: column wrap;
`;

interface IStyledInput {
    isError?: boolean;
    isFocused?: boolean;
}

const StyledInput = styled.input<IStyledInput>`
    width: 100%;
    outline: none;
    background-color: #121214;
    border: none;
    padding: 1rem 1.6rem;
    border-radius: 6px;
    border: ${({ isError, isFocused }) => {
        if (isFocused && !isError) {
            return '1px solid #feb52b';
        }

        if (isError) {
            return '1px solid #c10e00';
        }

        return '1px solid #1f2021';
    }};

    color: #fdfdfd;
    font-family: 'Circe', sans-serif;
    font-weight: 300;
    font-size: 1.8rem;

    transition: 0.1s;
`;
const StyledErrorMessage = styled.p`
    font-family: 'Circe';
    font-weight: 100;
    font-size: 1.6rem;
    color: #c10e00;

    margin-top: 4px;
`;
