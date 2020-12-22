import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components/macro';
import { debounce } from 'lodash';
import { MD } from '../../constants';
import { SliderItem } from './SliderItem';

const DEBOUNCE_TIME = 300;
const SCROLL_DIFFERENCE = 2;

export const SimpleSlider = () => {
    const data = new Array(16).fill(0);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    const [elementsInRow, setElementsInRow] = useState(1);
    const [orderOfChosenElement, setOrderOfChosenElement] = useState(0);
    const [count, setCount] = useState(1);
    const [wrapperWidth, setWrapperWidth] = useState(0);

    const isRightScrollAvailable = useMemo(() => {
        const maxCount = Math.ceil(data.length / elementsInRow);
        return count !== maxCount;
    }, [count, elementsInRow]);

    useEffect(() => {
        calculateElementsInRow();
    }, []);

    useEffect(() => {
        window.addEventListener('resize', debouncedCalculation);
        return () => window.removeEventListener('resize', debouncedCalculation);
    }, []);

    const executeRightScroll = () => {
        if (wrapperRef && wrapperRef.current && divRef && divRef.current) {
            wrapperRef.current.scrollTo({
                left: divRef.current.offsetWidth * elementsInRow * count,
                behavior: 'smooth',
            });
        }
    };

    const executeLeftScroll = () => {
        if (wrapperRef && wrapperRef.current && divRef && divRef.current) {
            wrapperRef.current.scrollTo({
                left:
                    divRef.current.offsetWidth *
                    elementsInRow *
                    (count - SCROLL_DIFFERENCE),
                behavior: 'smooth',
            });
        }
    };

    const onRightArrow = () => {
        if (!isRightScrollAvailable) {
            return;
        }
        executeRightScroll();
        setCount(count + 1);
    };

    const onLeftArrow = () => {
        if (count === 1) {
            return;
        }
        executeLeftScroll();
        setCount(count - 1);
    };

    const onItemClick = (index: number) => {
        setOrderOfChosenElement(index);
    };

    const calculateElementsInRow = () => {
        if (wrapperRef && wrapperRef.current && divRef && divRef.current) {
            setElementsInRow(
                Math.floor(
                    wrapperRef.current.offsetWidth / divRef.current.offsetWidth,
                ),
            );
            setWrapperWidth(wrapperRef.current.offsetWidth);
        }
    };

    const debouncedCalculation = debounce(
        calculateElementsInRow,
        DEBOUNCE_TIME,
    );

    return (
        <div style={{ position: 'relative' }}>
            <ArrowLeft onClick={onLeftArrow} />
            <ArrowRight onClick={onRightArrow} />
            <Wrapper ref={wrapperRef}>
                {data.map((item, index) => {
                    const elementOrder = index + 1;
                    return (
                        <div ref={divRef}>
                            <SliderItem
                                orderOfChosenElement={orderOfChosenElement}
                                handleClick={onItemClick}
                                order={elementOrder}>
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
        overflow-x: scroll;
    }

    z-index: 1;
`;
