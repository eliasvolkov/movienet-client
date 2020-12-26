import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/macro';
import { useOnClickOutside } from '../../hooks/useClickOutside';
import { mq } from '../../utils/ui';

type Props = {
    children: React.ReactNode;
    order: number;
    handleClick: (index: number) => void;
    orderOfChosenElement: number;
    isLast?: boolean;
};

export const SliderItem = ({
    children,
    order,
    handleClick,
    orderOfChosenElement,
    isLast,
}: Props) => {
    const ref: any = useRef();

    const onClick = () => {
        handleClick(orderOfChosenElement === order ? 0 : order);
    };

    const reset = () => {
        if (orderOfChosenElement === order) {
            handleClick(0);
        }
    };

    useOnClickOutside(ref, () => reset());

    return (
        <StyledItem
            ref={ref}
            isSelected={orderOfChosenElement === order}
            shouldMoveLeft={order < orderOfChosenElement}
            shouldMoveRight={
                orderOfChosenElement > 0 && order > orderOfChosenElement
            }
            isLast={isLast}
            onClick={onClick}>
            {children}
        </StyledItem>
    );
};

interface IItem {
    isSelected?: boolean;
    shouldMoveLeft?: boolean;
    shouldMoveRight?: boolean;
    isLast?: boolean;
}
const StyledItem = styled.div<IItem>`
    ${mq({
        minWidth: [
            '22rem',
            '20rem',
            '20rem',
            '20rem',
            '22rem',
            '26rem',
            '28rem',
            '30rem',
        ],
        height: [
            '12rem',
            '12rem',
            '12rem',
            '12rem',
            '12rem',
            '16rem',
            '16rem',
            '18rem',
        ],
    })};
    margin-left: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    transition: transform 300ms ease 100ms;
    border-radius: 0.8rem;

    ${({ isSelected, shouldMoveLeft, shouldMoveRight, isLast }) => {
        if (shouldMoveLeft || shouldMoveRight) {
            return {
                transform: `translateX(${shouldMoveLeft ? '-25%' : '25%'})`,
            };
        }

        if (isSelected) {
            return {
                transform: `scale(1.5) ${isLast ? 'translateX(-25%)' : ''}`,
            };
        }
        return null;
    }}
    z-index: 10;
`;
