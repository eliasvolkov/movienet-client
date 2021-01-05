import React from 'react';
import { useHistory } from 'react-router-dom';
import { Headline, Subtitle, Wrapper } from './Page.styles';
import { Background } from './components/Background/Background';
import { SignUpForm } from './components/Forms/SignUpForm';
import { useMst } from '../../models/Root';
import { SignUpBody } from '../../types/auth';

export const SignUpPage = () => {
    const { authStore } = useMst();
    const history = useHistory();
    const onSubmit = (values: SignUpBody) => {
        authStore.signUp(values, () => history.push('signin'));
    };

    return (
        <Wrapper>
            <Headline>Регистрация</Headline>
            <Subtitle>
                Зарегистрируйтесь для просмотра и загрузки фильмов и сериалов
            </Subtitle>
            <SignUpForm onSubmit={onSubmit} />
            <Background />
        </Wrapper>
    );
};
