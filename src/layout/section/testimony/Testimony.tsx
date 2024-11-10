import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../compoments/SectionTitle";
import {Icon} from "../../../compoments/icon/Icon";
import {Slider} from "../../../compoments/slider/Slider";
import {FlexWrapper} from "../../../compoments/FlexWrapper";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={"column"} align={"center"}>
                <Icon iconId={"quotes"}/>
                <Slider/>
            </FlexWrapper>
        </StyledTestimony>

    );
};

const StyledTestimony = styled.section`
    min-height: 50vh;
    background-color: darkolivegreen;
`