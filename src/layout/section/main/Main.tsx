import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../compoments/FlexWrapper";
export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi There</span>
                    <h2>I am Artem Ostapenko</h2>
                    <MainTitle>A Web Developer. </MainTitle>
                </div>
                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #dea8ff;
`
const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`
const MainTitle = styled.h1``

