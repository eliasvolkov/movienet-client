import React, { useState } from 'react';
import { AvatarWrapper } from 'components/Header/Header.styles';
import { Avatar } from 'components/Avatar/Avatar';
import { MainNavigation } from '../MainNavigation/MainNavigation';
import { ACCOUNT_LINKS, MAIN_LINKS } from '../constants';
import { AccountNavigation } from '../AccountNavigation/AccountNavigation';
import {
    DesktopNavWrapper,
    DesktopMenuIcon,
    AccountCloseIcon,
} from './DesktopNavigation.styles';

export const DesktopNavigation = () => {
    const [isAccountVisible, setAccountVisibility] = useState(false);
    const handleAccountVisibility = () => {
        setAccountVisibility((prevState) => !prevState);
    };
    return (
        <DesktopNavWrapper>
            <MainNavigation links={MAIN_LINKS} />
            <DesktopMenuIcon size={32} onClick={handleAccountVisibility} />
            {isAccountVisible && (
                <AvatarWrapper>
                    <AccountCloseIcon
                        size={54}
                        onClick={handleAccountVisibility}
                    />
                    <Avatar />
                    <AccountNavigation links={ACCOUNT_LINKS} />
                </AvatarWrapper>
            )}
        </DesktopNavWrapper>
    );
};
