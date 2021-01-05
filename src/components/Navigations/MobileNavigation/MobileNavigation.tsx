import React, { useEffect, useState } from 'react';
import { Search } from '@styled-icons/heroicons-solid/Search';
import { useHistory } from 'react-router-dom';
import { AvatarWrapper } from 'components/Header/Header.styles';
import { observer } from 'mobx-react-lite';
import { MainNavigation } from '../MainNavigation/MainNavigation';
import { ACCOUNT_LINKS, MAIN_LINKS } from '../constants';
import { AccountNavigation } from '../AccountNavigation/AccountNavigation';
import {
    MobileNavWrapper,
    IconsWrapper,
    CloseIcon,
    NavWrapper,
    MenuIcon,
    Scroll,
} from './MobileNavigation.styles';
import { Avatar } from '../../Avatar/Avatar';
import { useMst } from '../../../models/Root';

export const MobileNavigation = observer(() => {
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();
    const { authStore } = useMst();
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
                {!isOpen && (
                    <>
                        <Search size={26} />
                        <MenuIcon size={32} onClick={handleDrawer} />
                    </>
                )}
            </IconsWrapper>
            <Scroll isOpen={isOpen}>
                <CloseIcon size={34} onClick={handleDrawer} />
                <NavWrapper isOpen={isOpen}>
                    <MainNavigation links={MAIN_LINKS} />
                    <AvatarWrapper>
                        <Avatar name={authStore.name} />
                        <AccountNavigation links={ACCOUNT_LINKS} />
                    </AvatarWrapper>
                </NavWrapper>
            </Scroll>
        </MobileNavWrapper>
    );
});
