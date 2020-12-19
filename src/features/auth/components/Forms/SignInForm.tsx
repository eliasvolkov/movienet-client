import React from 'react';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { TextInput } from '../../../../components/Form/Input/Input.stories';
import { Button } from '../../../../components/Button/Button';
import {
    FormWrapper,
    InputWrapper,
    ButtonWrapper,
    Row,
    StyledLink,
    StyledH3,
    StyledP2,
} from './Forms.styles';

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
                                <Link to="/signup">
                                    <StyledLink>Зарегистрируйтесь</StyledLink>
                                </Link>
                            </Row>
                        </FormWrapper>
                    </Form>
                );
            }}
        </Formik>
    );
};
