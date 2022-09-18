import styled  from "styled-components"

export const MainTitle = styled.h1`
    font-size: 2.4rem;
    font-weight: 500;
    padding: 0.4rem 1.2rem;
    width: 100%;
    position:relative;
    top:${props => props.top ? "-32px" :"0px"};
    text-align: ${props => props.center ? "center" : ""};
    display: inline-block;
    color: var(--white);
    background-color:var(--primary);
    span{
        color: var(--secondary);
    }
` 
