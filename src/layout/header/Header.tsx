import React from 'react';
import styled from "styled-components";
import {Logo} from "../../compoments/logo/logo";
import {Menu} from "../../compoments/menu/Menu";

export const Header = () => {
    return (
        <div>
            <StyledHeader>
                <Logo />
                <Menu/>
            </StyledHeader>
        </div>
    );
};


const StyledHeader = styled.header`
    background-color: #3ea53e;
    display: flex;
    justify-content: space-between;
`

