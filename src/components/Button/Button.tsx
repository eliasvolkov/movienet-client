import * as React from 'react';
import styled from 'styled-components';

type Props = {
    children: React.ReactNode;
    onClick: (e: any) => void;
};

const StyledButton = styled.button`
    background-color: rgba(254, 181, 59, 0.8);
    outline: none;
    padding: 8px 16px;
    border: 1px solid #feb52b;
    border-radius: 8px;
    font-family: 'Circe';
    font-weight: normal;
`;

export const Button = ({ onClick, children }: Props) => (
    <StyledButton onClick={onClick} type="button">
        {children}
    </StyledButton>
);
