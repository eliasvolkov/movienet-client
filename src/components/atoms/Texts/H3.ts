import styled from 'styled-components/macro';
import { mq } from 'utils/ui';

export const H3 = styled.h3`
    font-family: 'Proxima Nova';
    line-height: 1.5;
    font-weight: 700;

    ${mq({
        fontSize: [14, 18, 32, 24, 24, 48],
    })}
`;
