import React from 'react';
import { DesktopNavigation } from '../Navigations/DesktopNavigation/DesktopNavigation';
import { MobileNavigation } from '../Navigations/MobileNavigation/MobileNavigation';
import { HeaderWrapper, LogoWrapper } from './Header.styles';

export const Header = () => {
    return (
        <HeaderWrapper>
            <LogoWrapper>Logo</LogoWrapper>
            <DesktopNavigation />
            <MobileNavigation />
        </HeaderWrapper>
    );
};
