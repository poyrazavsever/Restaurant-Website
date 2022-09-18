import styled  from "styled-components"

export const MainTitle = styled.h1`
    font-size: 2rem;
    font-weight: 400;
    padding: 0.4rem 1.6rem;
    position:relative;
    top:${props => props.top ? "-32px" :"0px"};
    text-align: ${props => props.center ? "center" : ""};
    width: ${props => props.center ? "100%" : ""};
    display: inline-block;
    color: var(--white);
    background-color:${props => props.background ? "var(--primary)" : ""} ;
    span{
        color: var(--secondary);
    }
` 
