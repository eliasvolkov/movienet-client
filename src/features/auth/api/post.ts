import { makeApiCall } from 'api/api';
import { API_BASE } from '../../../constants';
import { SignInBody, SignUpBody } from '../../../types/auth';

export const postSignUp = async (body: SignUpBody) => {
    const url = `${API_BASE}/users/signup`;

    const { data } = await makeApiCall({
        method: 'post',
        withAuth: false,
        data: body,
        url,
    });

    return data;
};

export const postSignIn = async (body: SignInBody) => {
    const url = `${API_BASE}/users/login`;

    const { data } = await makeApiCall({
        method: 'post',
        withAuth: false,
        data: body,
        url,
    });

    return data;
};
