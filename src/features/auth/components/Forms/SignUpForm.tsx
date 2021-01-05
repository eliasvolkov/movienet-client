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
import { SignUpBody } from '../../../../types/auth';

type Props = {
    onSubmit: (values: SignUpBody) => void;
};

export const SignUpForm = ({ onSubmit }: Props) => {
    const signUpValidationSchema = yup.object().shape({
        name: yup.string().required('name required'),
        email: yup.string().email('emailNotValid').required('emailRequired'),
        password: yup.string().required('passReq'),
    });

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                password: '',
            }}
            validationSchema={signUpValidationSchema}
            onSubmit={onSubmit}>
            {({ handleChange, handleSubmit, values, errors, touched }) => {
                const isDisabled =
                    !values.name || !values.email || !values.password;
                return (
                    <Form onSubmit={handleSubmit}>
                        <FormWrapper>
                            <StyledH3>Зарегистрироваться</StyledH3>
                            <TextInput
                                value={values.name}
                                onChange={handleChange('name')}
                                errorMessage={errors.name}
                                placeholder="Username"
                                isErrorShown={
                                    !!errors.name?.length && touched.name
                                }
                            />
                            <InputWrapper>
                                <TextInput
                                    value={values.email}
                                    onChange={handleChange('email')}
                                    errorMessage={errors.email}
                                    placeholder="E-mail"
                                    isErrorShown={
                                        !!errors.email?.length && touched.email
                                    }
                                />
                            </InputWrapper>
                            <InputWrapper>
                                <TextInput
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    placeholder="Password"
                                    errorMessage={errors.password}
                                    type="password"
                                    isErrorShown={
                                        !!errors.password?.length &&
                                        touched.password
                                    }
                                />
                            </InputWrapper>
                            <ButtonWrapper>
                                <Button
                                    onClick={handleSubmit}
                                    disabled={isDisabled}
                                    themeType="primary">
                                    Зарегестрироваться
                                </Button>
                            </ButtonWrapper>
                            <Row>
                                <StyledP2>Уже зарегестрированы?</StyledP2>
                                <Link to="/signin">
                                    <StyledLink>Войдите в аккаунт</StyledLink>
                                </Link>
                            </Row>
                        </FormWrapper>
                    </Form>
                );
            }}
        </Formik>
    );
};
