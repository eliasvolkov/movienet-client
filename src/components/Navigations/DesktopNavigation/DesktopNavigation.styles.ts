import styled from 'styled-components/macro';
import { Menu } from '@styled-icons/heroicons-solid/Menu';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import { IPad } from '../../../constants';

export const DesktopMenuIcon = styled(Menu)`
    margin-left: auto;
    cursor: pointer;
`;

export const DesktopNavWrapper = styled.nav`
    display: none;
    flex-flow: row wrap;
    @media (min-width: ${IPad}px) {
        display: flex;
        width: 100%;
    }
`;

export const AccountCloseIcon = styled(CloseOutline)`
    position: absolute;
    top: 10px;
    right: 50px;
    cursor: pointer;
`;


