import React from 'react';
import styled from 'styled-components/macro';

type Props = {};

export const Header: React.FC<Props> = (props: Props) => {
    return (
        <Wrapper>
            <Logo>Logo</Logo>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

const Logo = styled.strong``;

const Nav = styled.nav`
    flex: 1;
`;
