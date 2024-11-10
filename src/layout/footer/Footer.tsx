import React from 'react';
import styled from "styled-components";
import {Icon} from "../../compoments/icon/Icon";
import {FlexWrapper} from "../../compoments/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Artem</Name>
                <SocialList>
                    <SocialItem>
                        <SocialIconsLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"instagram"}></Icon>
                        </SocialIconsLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconsLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"instagram"}></Icon>
                        </SocialIconsLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconsLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"vk"}></Icon>
                        </SocialIconsLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconsLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"linkedin"}></Icon>
                        </SocialIconsLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2024 Artem Ostapenko, All Rights Reserved</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    min-height: 10vh;
    background-color: #57445c;
`
const Name = styled.span`

`
const SocialList = styled.ul`
    list-style-type: none;
    display: flex;
    gap: 30px;
`
const SocialItem = styled.li`

`
const SocialIconsLink = styled.a`
    
`

const Copyright = styled.small`

`