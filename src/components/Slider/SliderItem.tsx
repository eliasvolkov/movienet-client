import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/macro';
import { useOnClickOutside } from '../../hooks/useClickOutside';
import { mq } from '../../utils/ui';

type Props = {
    children: React.ReactNode;
    order: number;
    handleClick: (index: number) => void;
    orderOfChosenElement: number;
};

export const SliderItem = ({
    children,
    order,
    handleClick,
    orderOfChosenElement,
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
            onClick={onClick}>
            {children}
        </StyledItem>
    );
};

interface IItem {
    isSelected?: boolean;
    shouldMoveLeft?: boolean;
    shouldMoveRight?: boolean;
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
    background-color: #919191;
    margin-left: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    transition: transform 300ms ease 100ms;

    ${({ isSelected, shouldMoveLeft, shouldMoveRight }) => {
        if (shouldMoveLeft || shouldMoveRight) {
            return {
                transform: `translateX(${shouldMoveLeft ? '-25%' : '25%'})`,
            };
        }

        if (isSelected) {
            return {
                transform: 'scale(1.5)',
            };
        }
        return null;
    }}
    z-index: 3;
`;
