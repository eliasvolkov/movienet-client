import styled from 'styled-components/macro';
import { H1 } from '../../components/atoms/Texts/H1';
import { H2 } from '../../components/atoms/Texts/H2';

export const Headline = styled(H1)`
    text-align: center;
    font-weight: 100;
    margin-top: 5rem;
`;
export const Subtitle = styled(H2)`
    text-align: center;
    font-weight: 300;
    margin-bottom: 1.2rem;
`;

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
    padding: 0 1rem;
`;
