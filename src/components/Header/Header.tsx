import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';
import { Menu } from '@styled-icons/heroicons-solid/Menu';
import { Search } from '@styled-icons/heroicons-solid/Search';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

import { MainNavigation } from 'components/Navigations/MainNavigation/MainNavigation';
import { AccountNavigation } from 'components/Navigations/AccountNavigation/AccountNavigation';

import { MD, IPad } from '../../constants';

type Props = {};

export const LINKS = [
    { label: 'Home', url: '/signin' },
    { label: 'Movies', url: '/movies' },
    { label: 'Discover', url: '/discover' },
    { label: 'Wish List', url: '/wishlist' },
    { label: 'Login', url: '/login' },
];

export const Header: React.FC<Props> = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAccountVisible, setAccountVisibility] = useState(false);
    const history = useHistory();
    const { pathname } = history.location;

    const handleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };

    const handleAccountVisibility = () => {
        setAccountVisibility((prevState) => !prevState);
    };

    useEffect(() => {
        if (isOpen) {
            setIsOpen(false);
        }
    }, [pathname]);

    return (
        <HeaderWrapper>
            <LogoWrapper>Logo</LogoWrapper>
            <DesktopNavWrapper>
                <MainNavigation links={LINKS} />
                <DesktopMenuIcon size={32} onClick={handleAccountVisibility} />
                {isAccountVisible && (
                    <AvatarWrapper>
                        <AccountCloseIcon
                            size={54}
                            onClick={handleAccountVisibility}
                        />
                        <Avatar />
                        <AccountNavigation links={LINKS} />
                    </AvatarWrapper>
                )}
            </DesktopNavWrapper>

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
                    <MainNavigation links={LINKS} />
                    <AvatarWrapper>
                        <Avatar />
                        <AccountNavigation links={LINKS} />
                    </AvatarWrapper>
                </NavWrapper>
            </MobileNavWrapper>
        </HeaderWrapper>
    );
};

interface INavWrapper {
    isOpen: boolean;
}

export const HeaderWrapper = styled.header`
    width: 100%;
    position: fixed;
    height: 8rem;

    top: 0;
    z-index: 15;
    padding: 2rem;
    display: flex;
    align-items: center;

    background-color: rgba(31, 33, 37, 0.92);

    @media (min-width: ${IPad}px) {
        padding: 4rem;
    }
`;

export const MenuIcon = styled(Menu)`
    margin-left: 1.6rem;
`;
export const DesktopMenuIcon = styled(Menu)`
    margin-left: auto;
`;
export const CloseIcon = styled(CloseOutline)`
    margin-left: 1.6rem;
`;

export const AccountCloseIcon = styled(CloseOutline)`
    position: absolute;
    top: 10px;
    right: 50px;
`;

export const IconsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

export const LogoWrapper = styled.div`
    width: 9rem;
    font-size: 2.4rem;
    line-height: 1.5;
    @media (min-width: ${IPad}px) {
        margin-right: 8rem;
    }
`;

export const NavWrapper = styled.nav<INavWrapper>`
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    background-color: rgba(17, 17, 19, 0.96);
    overflow: hidden;
    position: fixed;
    top: 8rem;
    right: 0;
    ${({ isOpen }) => {
        if (isOpen) {
            return {
                width: '100%',
                minHeight: '100vh',
            };
        }

        return {
            width: '0%',
            height: '0',
        };
    }}

    @media (min-width: ${IPad}px) {
        display: none;
    }

    z-index: 100;
`;

const DesktopNavWrapper = styled.nav`
    display: none;
    flex-flow: row wrap;
    @media (min-width: ${IPad}px) {
        display: flex;
        width: 100%;
    }
`;

const MobileNavWrapper = styled.nav`
    margin-left: auto;
    @media (min-width: ${IPad}px) {
        display: none;
    }
`;

const AvatarWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    background-color: rgba(31, 33, 37, 0.92);
    padding: 1rem 4rem;
    @media (min-width: ${IPad}px) {
        min-height: 100vh;
        position: absolute;
        top: 0;
        right: 0;
        width: 40rem;
        padding: 6rem;
        backdrop-filter: blur(12px);
        background-color: rgba(31, 33, 37, 0.8);
    }

    @media (min-width: ${MD}px) {
        padding: 8rem;
    }
`;
const Avatar = styled.div`
    height: 6rem;
    width: 6rem;
    background-color: #737373;
    border-radius: 100%;
`;
