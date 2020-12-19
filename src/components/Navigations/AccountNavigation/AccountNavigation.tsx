import React from 'react';
import { AccountLinksWrapper, StyledLink } from './AccountNavigation.styles';

export const AccountNavigation = ({ links }: any) => {
    return (
        <AccountLinksWrapper>
            {links.map((link: any) => (
                <StyledLink
                    to={link.url}
                    exact={link.isExact || false}
                    key={link.url}>
                    {link.label}
                </StyledLink>
            ))}
        </AccountLinksWrapper>
    );
};
