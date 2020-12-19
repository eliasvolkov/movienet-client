import styled from 'styled-components/macro';
import { Menu } from '@styled-icons/heroicons-solid/Menu';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import { IPad } from '../../../constants';

export const MobileNavWrapper = styled.nav`
    margin-left: auto;
    min-height: 100%;
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
    z-index: 7;
    position: absolute;
    top: 15px;
    right: 15px;
`;

export const IconsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;
interface INavWrapper {
    isOpen: boolean;
}

export const Scroll = styled.div<INavWrapper>`
    height: 100vh;
    overflow-y: scroll;
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flexdirection: 'column';
    background-color: rgba(17, 17, 19, 0.96);
`;

export const NavWrapper = styled.nav<INavWrapper>`
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;

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
    }};
    @media (min-width: ${IPad}px) {
        display: none;
    }
    z-index: 3;
`;
