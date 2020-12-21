import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { SliderItem } from './SliderItem';

export const SimpleSlider = () => {
    const data = new Array(10).fill(0);
    const [currentOrder, setCurrentOrder] = useState(1);
    const [activeElement, setActiveElement] = useState(0);
    const [count, setCount] = useState(0);
    const ELEMENTS_IN_ROW = 4;

    const onRightClick = () => {
        setCurrentOrder(currentOrder + ELEMENTS_IN_ROW);
        setCount(count + 1);
    };

    const onLeftClick = () => {
        if (currentOrder === 1 || count === 0) {
            return;
        }
        setCurrentOrder(currentOrder - ELEMENTS_IN_ROW);
        setCount(count - 1);
    };

    const handleClick = (index: number) => {
        setActiveElement(index);
    };
    return (
        <Wrapper>
            <ArrowLeft onClick={onLeftClick} />
            <ArrowRight onClick={onRightClick} />
            {data.map((item, index) => {
                const elementOrder = index + 1;
                return (
                    <SliderItem
                        activeElement={activeElement}
                        handleClick={handleClick}
                        swipeCoff={count}
                        elementsInRow={ELEMENTS_IN_ROW}
                        order={elementOrder}
                        shouldTransform={
                            currentOrder > 1 && elementOrder < currentOrder
                        }
                        shouldAppear={
                            currentOrder > 1 && elementOrder >= currentOrder
                        }>
                        {index + 1}
                    </SliderItem>
                );
            })}
        </Wrapper>
    );
};

const ArrowRight = styled.div`
    width: 40px;
    height: 40px;
    background-color: #e97171;
    position: absolute;
    top: 0;
    right: 0;
`;

const ArrowLeft = styled.div`
    width: 40px;
    height: 40px;
    background-color: #e97171;
    position: absolute;
    top: 0;
    left: 0;
`;
const Wrapper = styled.div`
    height: 400px;
    background-color: #434343;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    overflow-x: hidden;
    position: relative;
    padding: 0 10rem;

    z-index: 1;
`;
