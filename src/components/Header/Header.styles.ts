import styled from 'styled-components/macro';
import { IPad, MD } from '../../constants';

export const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;

    width: 100%;
    height: 8rem;
    position: fixed;
    top: 0;
    padding: 2rem;

    z-index: 15;
    background-color: rgba(31, 33, 37, 1);

    @media (min-width: ${IPad}px) {
        padding: 4rem;
        background-color: transparent;
        background-image: linear-gradient(
            0deg,
            rgba(17, 17, 19, 0),
            rgba(17, 17, 19, 0.6)
        );
    }
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
    padding: 1rem 4rem;
    @media (min-width: ${IPad}px) {
        min-height: 100vh;
        position: absolute;
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
