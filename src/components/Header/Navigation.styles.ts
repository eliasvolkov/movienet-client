import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const activeClassName = 'nav-item-active';

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
    font-size: 2.4rem;
    font-family: 'Circe';
    font-weight: 100;
    line-height: 6.6rem;
`;
