import styled from 'styled-components/macro';
import { mq } from 'utils/ui';

export const P1 = styled.p`
    font-family: 'Circe';
    line-height: 1.5;
    font-weight: 100;
    letter-spacing: 0.02em;

    ${mq({
        fontSize: [14, 12, 10, 10, 10],
    })}
`;
