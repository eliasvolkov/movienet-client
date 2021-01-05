import { makeApiCall } from 'api/api';
import { API_BASE } from '../../../constants';

export const getMe = async () => {
    const url = `${API_BASE}/users/me`;

    const { data } = await makeApiCall({
        url,
    });

    return data;
};
