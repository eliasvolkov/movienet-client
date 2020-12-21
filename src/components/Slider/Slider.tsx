import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { SliderItem } from './SliderItem';

export const SimpleSlider = () => {
    const data = new Array(10).fill(0);
    const [activeIndex, setActiveIndex] = useState(1);
    const [count, setCount] = useState(0);
    const ELEMENTS_IN_ROW = 1;

    const onRightClick = () => {
        setActiveIndex(activeIndex + ELEMENTS_IN_ROW);
        setCount(count + 1);
    };

    const onLeftClick = () => {
        if (activeIndex === 1 || count === 0) {
            return;
        }
        setActiveIndex(activeIndex - ELEMENTS_IN_ROW);
        setCount(count - 1);
    };
    return (
        <Wrapper>
            <ArrowLeft onClick={onLeftClick} />
            <ArrowRight onClick={onRightClick} />
            {data.map((item, index) => {
                return (
                    <SliderItem
                        swipeCoff={count}
                        elementsInRow={ELEMENTS_IN_ROW}
                        index={index + 1}
                        shouldTransform={
                            activeIndex > 1 && index + 1 < activeIndex
                        }
                        shouldAppear={
                            activeIndex > 1 && index + 1 >= activeIndex
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

    z-index: 1;
`;
interface IItem {
    isClicked?: boolean;
}
