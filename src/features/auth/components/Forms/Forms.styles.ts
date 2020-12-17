import styled from 'styled-components/macro';
import { P1 } from 'components/atoms/Texts/P1';
import { P2 } from 'components/atoms/Texts/P2';

export const FormWrapper = styled.div`
    display: flex;
    min-height: 40rem;
    width: 100%;
    min-width: 35rem;
    flex-flow: column wrap;
    padding: 2.4rem 3.2rem;

    background-color: rgba(31, 33, 37, 0.8);
    border: 1px solid #565c67;
    border-radius: 8px;
`;
export const Row = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
`;

export const InputWrapper = styled.div`
    margin-top: 1.2rem;
`;

export const ButtonWrapper = styled.div`
    margin-top: auto;
`;

export const StyledH3 = styled(P1)`
    text-align: center;
    font-weight: 100;
    margin-bottom: 1rem;
`;
export const StyledP2 = styled(P2)`
    text-align: center;
`;
export const StyledLink = styled(P2)`
    color: #fcac13;
`;
