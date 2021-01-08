export const getTokenFromStorage = (tokenKey: string) => {
    const token = localStorage.getItem(tokenKey);
    return token || '';
};
