import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { IPad } from '../../../constants';

const activeClassName = 'nav-item-active';

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
    font-size: 2.4rem;
    font-family: 'Circe';
    font-weight: 100;
    line-height: 6.6rem;
    @media (min-width: ${IPad}px) {
        line-height: 1.5;
        &:not(:first-child) {
            margin-left: 4rem;
        }
    }
`;
export const LinksWrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 4rem;

    @media (min-width: ${IPad}px) {
        flex-direction: row;
        padding: 0;
        align-items: center;
        width: 90%;
    }
`;
