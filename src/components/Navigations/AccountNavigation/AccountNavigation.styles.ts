import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { IPad, COLORS } from '../../../constants';

const activeClassName = 'nav-item-active';

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
    &.${activeClassName} {
        color: ${COLORS.PRIMARY};
    }
    font-size: 2.5rem;
    font-family: 'Circe';
    font-weight: 100;
    line-height: 6.6rem;
    opacity: 0.8;
    &:hover {
        opacity: 1;
    }
    @media (min-width: ${IPad}px) {
        font-size: 1.6rem;
        line-height: 4.8rem;
    }
`;

export const AccountLinksWrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
`;
