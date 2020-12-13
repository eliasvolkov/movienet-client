import styled from 'styled-components/macro';
import { mq } from 'utils/ui';

export const H1 = styled.h1`
    font-family: 'Circe';
    line-height: 1.5;
    font-weight: 700;

    ${mq({
        fontSize: [78, 48, 32, 24, 24],
    })}
`;
