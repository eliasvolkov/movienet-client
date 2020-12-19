import * as React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';

type Props = {
    children: React.ReactNode;
    onClick: (e: any) => void;
    themeType: 'primary' | 'secondary';
    disabled?: boolean;
};

export const Button = ({ onClick, children, disabled, themeType }: Props) => (
    <StyledButton
        onClick={onClick}
        type="button"
        themeType={themeType}
        disabled={disabled}>
        {children}
    </StyledButton>
);

interface IStyledButton {
    themeType: 'primary' | 'secondary';
    disabled?: boolean;
}
const StyledButton = styled.button<IStyledButton>`
    ${({ themeType, disabled }) => {
        if (themeType === 'primary') {
            return {
                backgroundColor: 'rgba(254,181,59,0.8)',
                border: '1px solid #feb52b',
                color: COLORS.BGC,
            };
        }

        if (themeType === 'secondary') {
            return {
                backgroundColor: 'rgba(86,92,103,0.8)',
                border: '1px solid #565c67',
                color: disabled ? '#000000' : '#fff',
            };
        }
        return {
            backgroundColor: '#565c67',
        };
    }};

    &:hover {
        opacity: ${({ disabled }) => (disabled ? 0.8 : 1)};
    }
    cursor: pointer;
    opacity: 0.8;
    outline: none;
    padding: 0.8rem 1.6rem;
    border-radius: 8px;
    font-family: 'Circe';
    font-weight: normal;
    font-size: 1.6rem;
    width: 100%;
`;
