import styled from 'styled-components/macro';

export const LeftGradient = styled.div`
    top: 0;
    width: 50%;
    height: 100%;
    position: absolute;
    background-image: linear-gradient(
        270deg,
        rgba(25, 26, 29, 0),
        rgba(25, 26, 29, 0.6)
    );
`;

export const BottomGradient = styled.div`
    bottom: 0;
    width: 100%;
    height: 50%;
    position: absolute;
    background-image: linear-gradient(180deg, rgba(25, 26, 29, 0), #191a1d);
`;

export const TopGradient = styled.div`
    top: 0;
    width: 100%;
    height: 160px;
    position: absolute;
    background-image: linear-gradient(
        0deg,
        rgba(25, 26, 29, 0),
        rgba(25, 26, 29, 0.6)
    );
`;

export const AuthBackground = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #191a1d;
    z-index: -1;
`;

export const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    opacity: 0.2;
`;
