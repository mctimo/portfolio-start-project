import React from 'react';
import styled from "styled-components";

type WorkPropsType = {
    title?: string,
    text?: string,
    src?: string,
    link?: string,
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
           <Image src={props.src} alt="XXX"/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={props.link}>Demo</Link>
            <Link href={props.link}>Code</Link>

        </StyledWork>
    );
};

const StyledWork = styled.div`
    max-width: 540px;

`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const Link = styled.a`
    
`
const Title = styled.h3`

`
const Text = styled.p`

`