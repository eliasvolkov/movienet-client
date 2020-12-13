import styled from 'styled-components/macro';
import { mq } from 'utils/ui';

export const H5 = styled.h5`
    font-family: 'Proxima Nova';
    line-height: 1.5;
    font-weight: bold;

    ${mq({
        fontSize: [18, 48, 32, 24, 24],
    })}
`;
