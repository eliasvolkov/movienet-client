import styled from 'styled-components/macro';
import { mq } from 'utils/ui';

export const H1 = styled.h1`
    font-family: 'Circe';
    font-size: 48px;
    line-height: 1.5;
    font-weight: 100;

    ${mq({
        fontSize: [48, 48, 32, 24, 24],
    })}
`;
