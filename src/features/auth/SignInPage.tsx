import React from 'react';
import { useHistory } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Background } from './components/Background/Background';
import { Wrapper, Headline, Subtitle } from './Page.styles';
import { SignInForm } from './components/Forms/SignInForm';
import { SignInBody } from '../../types/auth';
import { useMst } from '../../models/Root';

export const SignInPage = observer(() => {
    const { authStore } = useMst();
    const history = useHistory();
    const onSubmit = (values: SignInBody) => {
        authStore.signIn(values, goToHomePage);
    };
    const goToHomePage = () => {
        history.push('/home');
    };

    return (
        <Wrapper>
            <Headline>Вход в аккаунт </Headline>
            <Subtitle>
                Войдите для доступа к подписке и списку избранного
            </Subtitle>
            <SignInForm
                onSubmit={onSubmit}
                initialValues={authStore.initialValues}
            />
            <Background />
        </Wrapper>
    );
});
