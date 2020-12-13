import styled from 'styled-components/macro';
import { mq } from 'utils/ui';

export const H2 = styled.h2`
    font-family: 'Proxima Nova Rg';
    line-height: 1.5;
    font-weight: 700;
    text-transform: capitalize;
    letter-spacing: 1px;

    ${mq({
        fontSize: [28, 48, 32, 24, 24],
    })}
`;
