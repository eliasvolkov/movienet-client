import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components/macro';
import { debounce } from 'lodash';
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
        <Mask>
            {count > 1 && orderOfChosenElement === 0 && (
                <ArrowLeft onClick={onLeftArrow}>GO</ArrowLeft>
            )}
            {isRightScrollAvailable && orderOfChosenElement === 0 && (
                <ArrowRight onClick={onRightArrow}>GO</ArrowRight>
            )}

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
        </Mask>
    );
};

const ArrowRight = styled.div`
    height: 100%;
    width: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    font-size: 3rem;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    opacity: 0;
    z-index: 0;
    transition: opacity 0.5s;
`;

const ArrowLeft = styled.div`
    height: 100%;
    width: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: 0;
    opacity: 0;
    z-index: 0;
    transition: opacity 0.5s;
`;

const Mask = styled.div`
    width: 100%;
    position: relative;
    &:hover ${ArrowRight} {
        opacity: 1;
        z-index: 7;
    }

    &:hover ${ArrowLeft} {
        opacity: 1;
        z-index: 7;
    }
    z-index: 1;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 300px;
    padding-left: 8rem;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    overflow-x: scroll;
    position: relative;

    ::-webkit-scrollbar-track {
        -webkit-box-shadow: none !important;
        background-color: transparent;
        display: none;
    }
    ::-webkit-scrollbar {
        width: 3px !important;
        background-color: transparent;
        display: none;
    }
    ::-webkit-scrollbar-thumb {
        background-color: transparent;
        display: none;
    }

    z-index: 3;
`;
