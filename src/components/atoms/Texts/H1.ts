import styled from '@emotion/styled';
import { mq } from 'utils/ui';

export const H1 = styled.h1`
    font-family: 'Circe';
    font-size: 60px;
    line-height: 1.5;
    font-weight: 800;

    ${mq({
        fontSize: [60, 48, 32, 24, 20],
    })}
`;
