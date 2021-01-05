import React, { useEffect, useState } from 'react';
import { DesktopNavigation } from '../Navigations/DesktopNavigation/DesktopNavigation';
import { MobileNavigation } from '../Navigations/MobileNavigation/MobileNavigation';
import { HeaderWrapper, LogoWrapper } from './Header.styles';

export const Header = () => {
    const [hasBlur, setHasBlur] = useState(false);

    const listenScrollEvent = (e: any) => {
        if (window.scrollY > 10) {
            return setHasBlur(true);
        }
        if (window.scrollY < 10) {
            return setHasBlur(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () => window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    return (
        <HeaderWrapper hasBlur={hasBlur}>
            <LogoWrapper>Logo</LogoWrapper>
            <DesktopNavigation />
            <MobileNavigation />
        </HeaderWrapper>
    );
};
