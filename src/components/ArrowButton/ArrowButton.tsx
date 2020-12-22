import React from 'react';
import { ChevronRight } from '@styled-icons/boxicons-regular/ChevronRight';
import styled from 'styled-components/macro';

type Props = {
    isLeft?: boolean;
    onClick: () => void;
};

export const ArrowButton: React.FC<Props> = ({ isLeft, onClick }: Props) => {
    return <StyledArrow onClick={onClick} isLeft={isLeft} />;
};

interface IStyledArrow {
    isLeft?: boolean;
}

const StyledArrow = styled(ChevronRight)<IStyledArrow>`
    color: white;
    width: 20rem;
    height: 10rem;
    cursor: pointer;
    transform: ${({ isLeft }) => (isLeft ? 'rotate(180deg)' : 'rotate(0)')};
    &:hover {
        transform: ${({ isLeft }) =>
            isLeft ? 'rotate(180deg) scale(1.3)' : 'scale(1.3)'};
    }
`;
