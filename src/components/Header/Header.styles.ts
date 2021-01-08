import styled from 'styled-components/macro';
import { IPad, MD } from '../../constants';

interface IHeaderWrapper {
    hasBlur?: boolean;
}

export const HeaderWrapper = styled.header<IHeaderWrapper>`
    display: flex;
    align-items: center;

    width: 100%;
    height: 8rem;
    position: fixed;
    top: 0;
    padding: 2rem;
    transition: all 0.5s;

    z-index: 3;

    @media (min-width: ${IPad}px) {
        padding: 4rem;
        background-color: transparent;
        background-image: linear-gradient(
            0deg,
            rgba(17, 17, 19, 0),
            rgba(17, 17, 19, 0.6)
        );

        ${({ hasBlur }) => {
            if (hasBlur) {
                return {
                    backdropFilter: 'blur(12px)',
                    backgroundColor: 'rgba(31, 33, 37, 0.8)',
                };
            }

            return null;
        }}
    }

    ${({ hasBlur }) => {
        if (hasBlur) {
            return {
                backdropFilter: 'blur(12px)',
                backgroundColor: 'rgba(31, 33, 37, 0.8)',
            };
        }

        return null;
    }}
`;

export const LogoWrapper = styled.div`
    width: 9rem;
    font-size: 2.4rem;
    line-height: 1.5;
    @media (min-width: ${IPad}px) {
        margin-right: 8rem;
    }
`;

export const AvatarWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    background-color: rgba(31, 33, 37, 0.92);
    padding: 6rem 4rem;
    @media (min-width: ${IPad}px) {
        min-height: 100vh;
        position: fixed;
        top: 0;
        right: 0;
        width: 40rem;
        padding: 6rem;
        backdrop-filter: blur(12px);
        background-color: rgba(31, 33, 37, 0.8);
    }

    @media (min-width: ${MD}px) {
        padding: 8rem;
    }
`;
