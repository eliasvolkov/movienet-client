import React from 'react';
import { Form, Formik } from 'formik';
import styled from 'styled-components/macro';
import { P2 } from 'components/atoms/Texts/P2';
import { H3 } from 'components/atoms/Texts/H3';
import { H4 } from 'components/atoms/Texts/H4';
import { TextInput } from '../../../../components/Form/Input/Input.stories';
import { Button } from '../../../../components/Button/Button';
import { P1 } from '../../../../components/atoms/Texts/P1';

type Props = {
    onSubmit: (values: any) => void;
};

export const SignInForm = ({ onSubmit }: Props) => {
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            onSubmit={onSubmit}>
            {({ handleChange, handleSubmit, values, errors, touched }) => {
                return (
                    <Form onSubmit={handleSubmit}>
                        <FormWrapper>
                            <StyledH3>Войти</StyledH3>
                            <TextInput
                                value={values.email}
                                onChange={handleChange('email')}
                                placeholder="E-mail"
                            />
                            <InputWrapper>
                                <TextInput
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    placeholder="Password"
                                    type="password"
                                />
                            </InputWrapper>
                            <ButtonWrapper>
                                <Button
                                    onClick={handleSubmit}
                                    disabled
                                    themeType="secondary">
                                    Войти
                                </Button>
                            </ButtonWrapper>
                            <Row>
                                <StyledP2>Ещё нет аккаунта?</StyledP2>
                                <StyledLink>Зарегистрируйтесь</StyledLink>
                            </Row>
                        </FormWrapper>
                    </Form>
                );
            }}
        </Formik>
    );
};

const FormWrapper = styled.div`
    display: flex;
    min-height: 40rem;
    width: 100%;
    max-width: 38.4rem;
    flex-flow: column wrap;
    padding: 2.4rem 3.2rem;

    background-color: rgba(31, 33, 37, 0.8);
    border: 1px solid #565c67;
    border-radius: 8px;
`;
const Row = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
`;

const InputWrapper = styled.div`
    margin-top: 1.2rem;
`;

const ButtonWrapper = styled.div`
    margin-top: auto;
`;

const StyledH3 = styled(P1)`
    text-align: center;
    font-weight: 100;
    margin-bottom: 1rem;
`;
const StyledP2 = styled(P2)`
    text-align: center;
`;
const StyledLink = styled(P2)`
    color: #fcac13;
`;
