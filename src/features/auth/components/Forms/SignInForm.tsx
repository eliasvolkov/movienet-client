import React from 'react';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
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
import { SignInBody } from '../../../../types/auth';

type Props = {
    onSubmit: (values: SignInBody) => void;
    initialValues: SignInBody;
};

export const SignInForm = ({ onSubmit, initialValues }: Props) => {
    const signInValidationSchema = yup.object().shape({
        email: yup.string().email('emailNotValid').required('emailRequired'),
        password: yup.string().required('passReq'),
    });
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={signInValidationSchema}>
            {({ handleChange, handleSubmit, values, errors, touched }) => {
                const isDisabled = !values.email || !values.password;
                return (
                    <Form onSubmit={handleSubmit}>
                        <FormWrapper>
                            <StyledH3>Войти</StyledH3>
                            <TextInput
                                value={values.email}
                                onChange={handleChange('email')}
                                errorMessage={errors.email}
                                isErrorShown={
                                    !!errors.email?.length && touched.email
                                }
                                placeholder="E-mail"
                            />
                            <InputWrapper>
                                <TextInput
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    placeholder="Password"
                                    errorMessage={errors.password}
                                    isErrorShown={
                                        !!errors.password?.length &&
                                        touched.password
                                    }
                                    type="password"
                                />
                            </InputWrapper>
                            <ButtonWrapper>
                                <Button
                                    onClick={handleSubmit}
                                    disabled={isDisabled}
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
