import React from 'react';
import { Headline, Subtitle, Wrapper } from './Page.styles';
import { Background } from './components/Background/Background';
import { SignUpForm } from './components/Forms/SignUpForm';

export const SignUpPage = () => {
    return (
        <Wrapper>
            <Headline>Регистрация</Headline>
            <Subtitle>
                Зарегистрируйтесь для просмотра и загрузки фильмов и сериалов
            </Subtitle>
            <SignUpForm onSubmit={() => {}} />
            <Background />
        </Wrapper>
    );
};
