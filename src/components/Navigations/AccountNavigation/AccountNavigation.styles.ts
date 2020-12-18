import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

const activeClassName = 'nav-item-active';

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
    font-size: 2.4rem;
    font-family: 'Circe';
    font-weight: 100;
    line-height: 6.6rem;
`;

export const AccountLinksWrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
`;
