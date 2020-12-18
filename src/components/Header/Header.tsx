import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';
import { Menu } from '@styled-icons/heroicons-solid/Menu';
import { Search } from '@styled-icons/heroicons-solid/Search';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

import { StyledLink } from './Navigation.styles';

type Props = {};

export const LINKS = [
    { label: 'Home', url: '/signin' },
    { label: 'Movies', url: '/movies' },
    { label: 'Discover', url: '/discover' },
    { label: 'Wish List', url: '/wishlist' },
    { label: 'Login', url: '/login' },
];

export const Navigation = ({ links }: any) => {
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

export const Header: React.FC<Props> = (props: Props) => {
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
        <HeaderWrapper>
            <LogoWrapper>Logo</LogoWrapper>
            <IconsWrapper>
                {!isOpen && <Search size={26} />}

                {isOpen ? (
                    <CloseIcon size={34} onClick={handleDrawer} />
                ) : (
                    <MenuIcon size={32} onClick={handleDrawer} />
                )}
            </IconsWrapper>

            <NavWrapper isOpen={isOpen}>
                <Navigation links={LINKS} />
                <AvatarWrapper>
                    <Avatar />
                    <Navigation links={LINKS} />
                </AvatarWrapper>
            </NavWrapper>
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

    background-color: #f5ab0f;
`;

export const MenuIcon = styled(Menu)`
    margin-left: 1.6rem;
`;
export const CloseIcon = styled(CloseOutline)`
    margin-left: 1.6rem;
`;

export const IconsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-left: auto;
`;

export const LogoWrapper = styled.div`
    width: 9rem;
    font-size: 2.4rem;
`;

export const NavWrapper = styled.nav<INavWrapper>`
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    background-color: #f5ab0f;
    border: 1px solid red;
    overflow: hidden;
    position: fixed;
    top: 8rem;
    right: 0;
    ${({ isOpen }) => {
        if (isOpen) {
            return {
                width: '100%',
                height: '100vh',
            };
        }

        return {
            width: '0%',
            height: '0',
        };
    }}

    z-index: 100;
`;

export const LinksWrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 4rem;
`;

const AvatarWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    background-color: #513a1e;
`;
const Avatar = styled.div`
    height: 6rem;
    width: 6rem;
    background-color: #737373;
    border-radius: 100%;
`;
