import styled from 'styled-components/macro';
import { mq } from 'utils/ui';

export const P2 = styled.p`
    font-family: 'Proxima Nova';
    line-height: 1.5;
    font-weight: 400;
    letter-spacing: 0.02em;

    ${mq({
        fontSize: [14, 12, 10, 10, 10],
    })}
`;
