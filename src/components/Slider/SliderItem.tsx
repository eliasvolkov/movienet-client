import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import { useOnClickOutside } from '../../hooks/useClickOutside';

type Props = {
    children: React.ReactNode;
    shouldTransform?: boolean;
    shouldAppear?: boolean;
    order: number;
    swipeCoff: number;
    elementsInRow: number;
    handleClick: (index: number) => void;
    activeElement: number;
};

const calculateTranslate = (elementsInRow: number) => {
    return (elementsInRow * 2.65) / 4;
};

export const SliderItem = ({
    children,
    shouldTransform,
    order,
    shouldAppear,
    swipeCoff,
    elementsInRow,
    handleClick,
    activeElement,
}: Props) => {
    const ref: any = useRef();

    const onClick = () => {
        handleClick(activeElement === order ? 0 : order);
    };

    const reset = () => {
        if (activeElement === order) {
            handleClick(0);
        }
    };
    useOnClickOutside(ref, () => reset());

    return (
        <StyledItem
            ref={ref}
            order={order}
            swipeCoff={swipeCoff}
            elementsInRow={elementsInRow}
            shouldAppear={shouldAppear}
            isSelected={activeElement === order}
            shouldMoveLeft={order < activeElement}
            shouldMoveRight={activeElement > 0 && order > activeElement}
            shouldTransform={shouldTransform}
            onClick={onClick}>
            {children}
        </StyledItem>
    );
};

interface IItem {
    isClicked?: boolean;
    isSelected?: boolean;
    shouldTransform?: boolean;
    shouldAppear?: boolean;
    shouldMoveLeft?: boolean;
    shouldMoveRight?: boolean;
    order: number;
    swipeCoff: number;
    elementsInRow: number;
}
const StyledItem = styled.div<IItem>`
    min-width: 35rem;
    height: 20rem;
    background-color: #919191;
    margin-left: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    transition: transform 300ms ease 100ms;

    ${({
        shouldTransform,
        order,
        shouldAppear,
        swipeCoff,
        isSelected,
        elementsInRow,
        shouldMoveLeft,
        shouldMoveRight,
    }) => {
        if (shouldMoveLeft || shouldMoveRight) {
            return {
                transform: `translateX(${shouldMoveLeft ? '-25%' : '25%'})`,
            };
        }
        if (isSelected && shouldAppear) {
            return {
                transform: `scale(1.5) translateX(-${
                    swipeCoff * calculateTranslate(elementsInRow) * 35
                }rem);`,
            };
        }
        if (shouldTransform) {
            return {
                transform: `translateX(-${order * 35}rem)`,
            };
        }
        if (shouldAppear) {
            return {
                transform: `translateX(-${swipeCoff * elementsInRow * 35}rem)`,
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
