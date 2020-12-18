import styled from 'styled-components/macro';
import { Menu } from '@styled-icons/heroicons-solid/Menu';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import { IPad } from '../../../constants';

export const MobileNavWrapper = styled.nav`
    margin-left: auto;
    @media (min-width: ${IPad}px) {
        display: none;
    }
`;

export const MenuIcon = styled(Menu)`
    margin-left: 1.6rem;
    cursor: pointer;
`;

export const CloseIcon = styled(CloseOutline)`
    margin-left: 1.6rem;
    cursor: pointer;
`;

export const IconsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;
interface INavWrapper {
    isOpen: boolean;
}

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
