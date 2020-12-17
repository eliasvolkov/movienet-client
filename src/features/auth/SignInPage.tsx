import React from 'react';
import { Background } from './components/Background/Background';
import { Wrapper, Headline, Subtitle } from './Page.styles';
import { SignInForm } from './components/Forms/SignInForm';

export const SignInPage = () => {
    return (
        <Wrapper>
            <Headline>Вход в аккаунт </Headline>
            <Subtitle>
                Войдите для доступа к подписке и списку избранного
            </Subtitle>
            <SignInForm onSubmit={() => {}} />
            <Background />
        </Wrapper>
    );
};
