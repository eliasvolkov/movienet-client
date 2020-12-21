import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/macro';
import { MD } from '../../constants';
import { SliderItem } from './SliderItem';

export const SimpleSlider = () => {
    const data = new Array(10).fill(0);
    const [currentOrder, setCurrentOrder] = useState(1);
    const [elementsInRow, setElementsInRow] = useState(0);
    const [orderOfChosenElement, setOrderOfChosenElement] = useState(0);
    const [count, setCount] = useState(0);
    const [wrapperWidth, setWrapperWidth] = useState(0);
    const ELEMENTS_IN_ROW = 3;

    console.log('elementsInRow', elementsInRow);

    const wrapperRef: any = useRef();
    const divRef: any = useRef();

    useEffect(() => {
        calculateElementsInRow();
    }, []);

    useEffect(() => {
        window.addEventListener('resize', calculateElementsInRow);
        return () =>
            window.removeEventListener('resize', calculateElementsInRow);
    }, []);

    const onRightClick = () => {
        setCurrentOrder(currentOrder + elementsInRow);
        setCount(count + 1);
    };

    const onLeftClick = () => {
        if (currentOrder === 1 || count === 0) {
            return;
        }
        setCurrentOrder(currentOrder - elementsInRow);
        setCount(count - 1);
    };

    const handleClick = (index: number) => {
        setOrderOfChosenElement(index);
    };

    const calculateElementsInRow = () => {
        if (wrapperRef && wrapperRef.current && divRef && divRef.current) {
            setElementsInRow(
                Math.ceil(
                    wrapperRef.current.offsetWidth / divRef.current.offsetWidth,
                ),
            );
            setWrapperWidth(wrapperRef.current.offsetWidth);
        }
    };
    return (
        <div style={{ position: 'relative' }}>
            <ArrowLeft onClick={onLeftClick} />
            <ArrowRight onClick={onRightClick} />
            <Wrapper ref={wrapperRef}>
                {data.map((item, index) => {
                    const elementOrder = index + 1;
                    return (
                        <div ref={divRef}>
                            <SliderItem
                                // getWidth={calculateElementsInRow}
                                orderOfChosenElement={orderOfChosenElement}
                                handleClick={handleClick}
                                swipeCoff={count}
                                elementsInRow={elementsInRow}
                                order={elementOrder}
                                shouldTransform={
                                    currentOrder > 1 &&
                                    elementOrder < currentOrder
                                }
                                shouldAppear={
                                    currentOrder > 1 &&
                                    elementOrder >= currentOrder
                                }>
                                {index + 1}
                            </SliderItem>
                        </div>
                    );
                })}
            </Wrapper>
        </div>
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
    width: 100%;
    height: 400px;
    background-color: #434343;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    overflow-x: scroll;

    @media (min-width: ${MD}px) {
        overflow-x: hidden;
    }

    z-index: 1;
`;
