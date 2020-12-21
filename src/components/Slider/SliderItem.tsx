import React, { useEffect, useRef, useState } from 'react';
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
    orderOfChosenElement: number;
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
    orderOfChosenElement,
}: Props) => {
    const ref: any = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(ref.current.offsetWidth);
    }, []);

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
            width={width}
            order={order}
            swipeCoff={swipeCoff}
            elementsInRow={elementsInRow}
            shouldAppear={shouldAppear}
            isSelected={orderOfChosenElement === order}
            shouldMoveLeft={order < orderOfChosenElement}
            shouldMoveRight={
                orderOfChosenElement > 0 && order > orderOfChosenElement
            }
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
    width: number;
    swipeCoff: number;
    elementsInRow: number;
}
const StyledItem = styled.div<IItem>`
    min-width: 22rem;
    height: 13rem;
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
        width,
    }) => {
        if (shouldMoveLeft || shouldMoveRight) {
            return {
                transform: `translateX(${shouldMoveLeft ? '-25%' : '25%'})`,
            };
        }
        if (isSelected && shouldAppear) {
            return {
                transform: `scale(1.5) translateX(-${
                    swipeCoff * calculateTranslate(elementsInRow) * width
                }px);`,
            };
        }
        if (shouldTransform) {
            return {
                transform: `translateX(-${order * width}px)`,
            };
        }
        if (shouldAppear) {
            return {
                transform: `translateX(-${
                    swipeCoff * elementsInRow * width
                }px)`,
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
