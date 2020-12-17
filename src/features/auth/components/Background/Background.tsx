import React from 'react';
import {
    AuthBackground,
    StyledImage,
    TopGradient,
    LeftGradient,
    BottomGradient,
} from './Background.styles';

export const Background = () => {
    return (
        <AuthBackground>
            <StyledImage
                src="https://s80658.cdn.ngenix.net/resize/%7BSIZE%7D/_stor_/cms/content-contentasset/a/c1/af1a4ee99d50ef3e5e09ed7d2730bac1-15191-db7e26d4426a4ee8ba1dbb6cbc009c67.jpg"
                alt="background"
            />

            <TopGradient />
            <LeftGradient />
            <BottomGradient />
        </AuthBackground>
    );
};
