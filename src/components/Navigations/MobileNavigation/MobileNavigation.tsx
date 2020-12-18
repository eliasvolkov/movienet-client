import React, { useEffect, useState } from 'react';
import { Search } from '@styled-icons/heroicons-solid/Search';
import { useHistory } from 'react-router-dom';
import { AvatarWrapper } from 'components/Header/Header.styles';
import { MainNavigation } from '../MainNavigation/MainNavigation';
import { ACCOUNT_LINKS, MAIN_LINKS } from '../constants';
import { AccountNavigation } from '../AccountNavigation/AccountNavigation';
import {
    MobileNavWrapper,
    IconsWrapper,
    CloseIcon,
    NavWrapper,
    MenuIcon,
} from './MobileNavigation.styles';
import { Avatar } from '../../Avatar/Avatar';

export const MobileNavigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();
    const { pathname } = history.location;

    const handleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };

    useEffect(() => {
        if (isOpen) {
            setIsOpen(false);
        }
    }, [pathname]);
    return (
        <MobileNavWrapper>
            <IconsWrapper>
                {!isOpen && <Search size={26} />}

                {isOpen ? (
                    <CloseIcon size={34} onClick={handleDrawer} />
                ) : (
                    <MenuIcon size={32} onClick={handleDrawer} />
                )}
            </IconsWrapper>

            <NavWrapper isOpen={isOpen}>
                <MainNavigation links={MAIN_LINKS} />
                <AvatarWrapper>
                    <Avatar />
                    <AccountNavigation links={ACCOUNT_LINKS} />
                </AvatarWrapper>
            </NavWrapper>
        </MobileNavWrapper>
    );
};
