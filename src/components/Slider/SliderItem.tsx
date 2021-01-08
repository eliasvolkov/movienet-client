import React, { useRef } from 'react';
import styled from 'styled-components/macro';
import { useOnClickOutside } from '../../hooks/useClickOutside';
import { mq } from '../../utils/ui';

type Props = {
    children: React.ReactNode;
    order: number;
    handleClick: (index: number) => void;
    orderOfChosenElement: number;
    isLast?: boolean;
    isMobile?: boolean;
    wasLastClicked?: boolean;
};

export const SliderItem = ({
    children,
    order,
    handleClick,
    orderOfChosenElement,
    isLast,
    isMobile,
    wasLastClicked,
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
            wasLastClicked={wasLastClicked && !isMobile}
            isLast={isLast && !isMobile}
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
    wasLastClicked?: boolean;
}
const StyledItem = styled.div<IItem>`
    ${mq({
        width: [
            '22rem',
            '26rem',
            '30rem',
            '30rem',
            '30rem',
            '30rem',
            '30rem',
            '30rem',
        ],
        height: [
            '12rem',
            '16rem',
            '18rem',
            '18rem',
            '18rem',
            '18rem',
            '18rem',
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

    ${({
        isSelected,
        shouldMoveLeft,
        shouldMoveRight,
        isLast,
        wasLastClicked,
    }) => {
        if (shouldMoveLeft || shouldMoveRight) {
            if (wasLastClicked) {
                return {
                    transform: `translateX(${shouldMoveLeft ? '-55%' : '-4%'})`,
                };
            }
            return {
                transform: `translateX(${shouldMoveLeft ? '-1%' : '49%'})`,
            };
        }

        if (isSelected) {
            return {
                transform: `scale(1.5) ${
                    isLast ? 'translateX(-20%)' : 'translateX(16%)'
                }`,
            };
        }
        return null;
    }}
    z-index: 10;
`;
