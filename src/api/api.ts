import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { getTokenFromStorage } from 'utils/token';
import { TOKEN_KEY } from '../constants';

interface IApiCallParams {
    url: string;
    withAuth?: boolean;
    method?: AxiosRequestConfig['method'];
    data?: any;
}

export async function makeApiCall<T>({
    url,
    method = 'get',
    data,
    withAuth = true,
}: IApiCallParams): Promise<AxiosResponse<T>> {
    if (withAuth) {
        const token = await getTokenFromStorage(TOKEN_KEY);
        return axios({
            method,
            url,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data,
        });
    }
    return axios({
        method,
        url,
        data,
    });
}
