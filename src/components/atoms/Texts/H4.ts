import styled from 'styled-components/macro';
import { mq } from 'utils/ui';

export const H4 = styled.h4`
    font-family: 'Proxima Nova';
    line-height: 1.5;
    font-weight: 600;
    letter-spacing: 0.02em;

    ${mq({
        fontSize: [10, 12, 14, 16, 18, 24],
    })}
`;
