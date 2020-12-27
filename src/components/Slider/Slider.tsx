import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components/macro';
import { debounce } from 'lodash';
import { SliderItem } from './SliderItem';
import { ArrowButton } from '../ArrowButton/ArrowButton';
import { H4 } from '../atoms/Texts/H4';
import { MovieCard } from './MovieCard';
import { isMobile } from '../../utils/ui';

const DEBOUNCE_TIME = 300;
const SCROLL_DIFFERENCE = 2;

type Props = {
    data: any[];
    rowTitle: string;
};

export const SimpleSlider = ({ data, rowTitle }: Props) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    const [elementsInRow, setElementsInRow] = useState(1);
    const [orderOfChosenElement, setOrderOfChosenElement] = useState(0);
    const [count, setCount] = useState(1);
    const [wrapperWidth, setWrapperWidth] = useState(0);
    const [isMobileDevice, setIsMobileDevice] = useState(true);

    const isRightScrollAvailable = useMemo(() => {
        const maxCount = Math.ceil(data.length / elementsInRow);
        return count !== maxCount;
    }, [count, elementsInRow]);

    const wasLastClicked = useMemo(() => {
        return (
            orderOfChosenElement === elementsInRow * count ||
            orderOfChosenElement === data.length
        );
    }, [count, elementsInRow, orderOfChosenElement]);

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
        setIsMobileDevice(isMobile());
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
            {!isMobileDevice && (
                <>
                    {count > 1 && orderOfChosenElement === 0 && (
                        <ArrowLeft>
                            <ArrowButton onClick={onLeftArrow} isLeft />
                        </ArrowLeft>
                    )}
                    {isRightScrollAvailable && orderOfChosenElement === 0 && (
                        <ArrowRight onClick={onRightArrow}>
                            <ArrowButton onClick={onRightArrow} />
                        </ArrowRight>
                    )}
                </>
            )}

            <StyledText>{rowTitle}</StyledText>
            <Wrapper ref={wrapperRef} isSelected={orderOfChosenElement > 0}>
                {data.map((item, index) => {
                    const elementOrder = index + 1;
                    const isLast =
                        elementOrder === elementsInRow * count ||
                        elementOrder === data.length;

                    return (
                        <div ref={divRef}>
                            <SliderItem
                                orderOfChosenElement={orderOfChosenElement}
                                handleClick={onItemClick}
                                order={elementOrder}
                                isLast={isLast}
                                wasLastClicked={wasLastClicked}
                                isMobile={isMobileDevice}>
                                <MovieCard
                                    image={item.backdrop_path}
                                    title={item.title}
                                    overview={item.overview}
                                    isInfoShown={
                                        orderOfChosenElement === elementOrder
                                    }
                                />
                            </SliderItem>
                        </div>
                    );
                })}
            </Wrapper>
        </Mask>
    );
};

const StyledText = styled(H4)`
    font-weight: 100;
    margin-left: 4rem;
    margin-bottom: -4.5rem;
`;

const ArrowRight = styled.div`
    height: 100%;
    width: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    font-size: 3rem;
    right: 0;
    top: 48%;
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
    top: 48%;
    transform: translate(0, -50%);
    left: 0;
    opacity: 0;
    z-index: 0;
    transition: opacity 0.5s;
`;

const Mask = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
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
interface IWrapper {
    isSelected?: boolean;
}
const Wrapper = styled.div<IWrapper>`
    width: 100%;
    padding: 5rem 4rem;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
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
`;
