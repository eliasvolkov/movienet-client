import styled from 'styled-components/macro';
import { mq } from 'utils/ui';

export const H2 = styled.h2`
    font-family: 'Circe';
    line-height: 1.5;
    font-weight: 700;
    letter-spacing: 1px;

    ${mq({
        fontSize: ['1.6rem', '1.8rem', '2.2rem'],
    })}
`;

// ${mq({
//         fontSize: [10, 12, 14, 16, 18, 24],
//     })}
