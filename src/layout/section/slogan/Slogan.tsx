import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../compoments/SectionTitle";
import {Button} from "../../../compoments/Button";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <SectionTitle>I Am Available For Freelance</SectionTitle>
            <Button>Hire me</Button>
        </StyledSlogan>
    );
};


const StyledSlogan = styled.section`
    min-height: 30vh;
    background-color: #a66363;
    text-align: center;
`

