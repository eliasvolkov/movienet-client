import React from 'react';
import styled from 'styled-components/macro';
import { H2 } from 'components/atoms/Texts/H2';
import { Box, Grid } from 'react-raster';
import { H1 } from 'components/atoms/Texts/H1';
import { SignInForm } from './components/form/SignInForm';
import { BREAKPOINTS } from '../../constants';

export const LoginPage = () => {
    return (
        <Wrapper>
            <Main
                breakpoints={BREAKPOINTS}
                colspan={24}
                tag="main"
                left="2vw"
                right="2vw"
                top="2vw"
                bottom="2vw"
                gutterX="2vw"
                gutterY="1vw"
                alignX="center"
                control>
                <Box cols={24} alignX="center">
                    <Box cols={24} alignX="center" top={[5, 5, 5, 3, 3, 3, 0]}>
                        <Headline>Регистрация</Headline>
                    </Box>
                    <Box cols={24} alignX="center">
                        <Subtitle>
                            Зарегистрируйтесь для просмотра и загрузки фильмов и
                            сериалов
                        </Subtitle>
                    </Box>
                    <Box cols={[22, 20, 12, 12, 12, 10, 9, 5]}>
                        <SignInForm onSubmit={() => {}} />
                    </Box>
                </Box>
            </Main>
            <AuthBackground>
                <StyledImage
                    src="https://s80658.cdn.ngenix.net/resize/%7BSIZE%7D/_stor_/cms/content-contentasset/a/c1/af1a4ee99d50ef3e5e09ed7d2730bac1-15191-db7e26d4426a4ee8ba1dbb6cbc009c67.jpg"
                    alt="background"
                />

                <TopGradient />
                <LeftGradient />
                <BottomGradient />
            </AuthBackground>
        </Wrapper>
    );
};

const Main = styled(Grid)`
    min-height: 100vh;
    width: 100%;
`;
const Headline = styled(H1)`
    text-align: center;
    font-weight: 100;
`;
const Subtitle = styled(H2)`
    text-align: center;
    font-weight: 300;
`;

const LeftGradient = styled.div`
    top: 0;
    width: 50%;
    height: 100%;
    position: absolute;
    background-image: linear-gradient(
        270deg,
        rgba(25, 26, 29, 0),
        rgba(25, 26, 29, 0.6)
    );
`;

const BottomGradient = styled.div`
    bottom: 0;
    width: 100%;
    height: 50%;
    position: absolute;
    background-image: linear-gradient(180deg, rgba(25, 26, 29, 0), #191a1d);
`;

const TopGradient = styled.div`
    top: 0;
    width: 100%;
    height: 160px;
    position: absolute;
    background-image: linear-gradient(
        0deg,
        rgba(25, 26, 29, 0),
        rgba(25, 26, 29, 0.6)
    );
`;

const AuthBackground = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #191a1d;
    z-index: -1;
`;

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    opacity: 0.2;
`;

const StyledVideo = styled.video`
    //width: 100%;
    //height: 100%;
    //object-fit: cover;
    //object-position: center top;
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: 3;
`;

const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
`;
