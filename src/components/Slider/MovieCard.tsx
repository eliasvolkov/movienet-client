import React from 'react';
import styled from 'styled-components/macro';
import { P2 } from 'components/atoms/Texts/P2';
import { P1 } from 'components/atoms/Texts/P1';
import { Link } from 'react-router-dom';

type Props = {
    image?: string;
    title: string;
    overview: string;
    original_language: string;
    release_date: string;
    isInfoShown?: boolean;
};

export const MovieCard: React.FC<Props> = ({
    title,
    overview,
    image,
    original_language,
    release_date,
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
                <Year>
                    {release_date.slice(0, 4)} | {original_language}
                </Year>
                <Overview>{overview}</Overview>
                <DetailsLink to="/">details</DetailsLink>
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
    padding: 1rem;
    opacity: ${({ isInfoShown }) => (isInfoShown ? 1 : 0)};
    transition: 0.5s;
    display: flex;
    flex-flow: column wrap;
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
    text-transform: uppercase;
`;

const Overview = styled(P2)`
    margin-top: 0.8rem;
    width: 80%;
    font-size: 0.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`;

const DetailsLink = styled(Link)`
    font-family: 'Circe';
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-weight: 800;
    margin-top: 1.4rem;
`;
