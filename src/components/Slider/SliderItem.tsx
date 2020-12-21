import React, { useState } from 'react';
import styled from 'styled-components/macro';

type Props = {
    children: React.ReactNode;
    shouldTransform?: boolean;
    shouldAppear?: boolean;
    index: number;
    swipeCoff: number;
    elementsInRow: number;
};

const calculateTranslate = (elementsInRow: number) => {
    return (elementsInRow * 2.65) / 4;
};

export const SliderItem = ({
    children,
    shouldTransform,
    index,
    shouldAppear,
    swipeCoff,
    elementsInRow,
}: Props) => {
    const [isSelected, setIsSelected] = useState(false);
    return (
        <StyledItem
            index={index}
            swipeCoff={swipeCoff}
            elementsInRow={elementsInRow}
            shouldAppear={shouldAppear}
            isSelected={isSelected}
            shouldTransform={shouldTransform}
            onClick={() => setIsSelected(!isSelected)}>
            {children}
        </StyledItem>
    );
};

interface IItem {
    isClicked?: boolean;
    isSelected?: boolean;
    shouldTransform?: boolean;
    shouldAppear?: boolean;
    index: number;
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
        index,
        shouldAppear,
        swipeCoff,
        isSelected,
        elementsInRow,
    }) => {
        if (isSelected && shouldAppear) {
            return {
                transform: `scale(1.5) translateX(-${
                    swipeCoff * calculateTranslate(elementsInRow) * 35
                }rem);`,
            };
        }
        if (shouldTransform) {
            return {
                transform: `translateX(-${index * 35}rem)`,
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
