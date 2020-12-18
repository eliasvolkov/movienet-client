import React from 'react';
import { LinksWrapper, StyledLink } from './MainNavigation.styles';

export const MainNavigation = ({ links }: any) => {
    return (
        <LinksWrapper>
            {links.map((link: any) => (
                <StyledLink
                    to={link.url}
                    exact={link.isExact || false}
                    key={link.url}>
                    {link.label}
                </StyledLink>
            ))}
        </LinksWrapper>
    );
};
