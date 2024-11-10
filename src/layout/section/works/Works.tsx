import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../compoments/SectionTitle";
import {Menu} from "../../../compoments/menu/Menu";
import {FlexWrapper} from "../../../compoments/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from '../../../assets/images/social.webp'
import timerImg from '../../../assets/images/timer.webp'

const workItems = ["All", "landing page", "React", "spa"]
export const Works = () => {
    return (
        <div>
            <StyledWorks>
                <SectionTitle>My Works</SectionTitle>
                <Menu menuItems={workItems}/>
                <FlexWrapper wrap={"wrap"} justify={"space-around"}>
                    <Work title={"Social Network"}
                          text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                          src={socialImg}/>
                    <Work title={"Timer"}
                          text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"}
                          src={timerImg}/>
                </FlexWrapper>
            </StyledWorks>
        </div>
    );
};


const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #dea8ff;
`