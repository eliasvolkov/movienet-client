import styled from 'styled-components/macro';
import { IPad } from '../../constants';

export const StyledName = styled.strong`
    font-family: 'Circe';
    font-size: 2.4rem;
    font-weight: 100;
    color: white;
    opacity: 0.8;
    margin-left: 20px;

    @media (min-width: ${IPad}px) {
        font-size: 1.6rem;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 4rem;
    cursor: pointer;

    &:hover ${StyledName} {
        opacity: 1;
    }
`;

export const AvatarWrapper = styled.div`
    height: 5.8rem;
    width: 5.8rem;
    position: relative;
`;

export const Background = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
`;

export const StyledAvatar = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    border-radius: 100%;
`;
