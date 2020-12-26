import React from 'react';
import styled from 'styled-components/macro';
import { P2 } from 'components/atoms/Texts/P2';
import { P1 } from 'components/atoms/Texts/P1';

type Props = {
    image?: string;
    title: string;
    overview: string;
    isInfoShown?: boolean;
};

export const MovieCard: React.FC<Props> = ({
    title,
    overview,
    image,
    isInfoShown = false,
}: Props) => {
    return (
        <Card>
            {isInfoShown ? <Gradient /> : <LightGradient />}
            <Background>
                <StyledImage
                    src={`https://image.tmdb.org/t/p/w500${image}`}
                    alt="image"
                />
            </Background>
            <InfoWrapper isInfoShown={isInfoShown}>
                <Title>{title}</Title>
                <Year>2020 | 18+</Year>
                <Overview>{overview}</Overview>
            </InfoWrapper>
        </Card>
    );
};

const Card = styled.div`
    height: 100%;
    width: 100%;
    position: relative;

    display: flex;
    flex-flow: column wrap;
    border-radius: 0.8rem;
    z-index: 5;
    cursor: pointer;
`;

export const Background = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
`;

interface IInfoWrapper {
    isInfoShown?: boolean;
}

const Gradient = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;

    background: linear-gradient(
        360deg,
        rgba(24, 25, 27, 0.8) 38.84%,
        rgba(24, 25, 27, 0) 99.98%,
        rgba(24, 25, 27, 0.443699) 99.99%
    );

    top: 0;
    left: 0;
    border-radius: 0.8rem;
    z-index: 2;
`;

const LightGradient = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(
        360deg,
        rgba(24, 25, 27, 0.25) 0.14%,
        rgba(24, 25, 27, 0.138656) 99.99%,
        rgba(24, 25, 27, 0) 100%
    );
    top: 0;
    left: 0;
    border-radius: 0.8rem;
    z-index: 2;
`;

export const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    border-radius: 0.8rem;
`;

const InfoWrapper = styled.div<IInfoWrapper>`
    margin-top: auto;
    z-index: 3;
    padding: 1rem 1rem 3rem;
    opacity: ${({ isInfoShown }) => (isInfoShown ? 1 : 0)};
    transition: 0.5s;
`;

const Title = styled(P1)`
    line-height: 1.8rem;
    width: 80%;
    font-weight: 700;
`;

const Year = styled.p`
    font-family: 'Circe';
    font-size: 0.8rem;
    font-weight: 400;
    margin-top: 0.8rem;
`;

const Overview = styled(P2)`
    margin-top: 1.2rem;
    width: 80%;
    height: 2rem;
    text-overflow: ellipsis;
    font-size: 0.8rem;
    word-break: break-word;
    display: -webkit-box;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;
