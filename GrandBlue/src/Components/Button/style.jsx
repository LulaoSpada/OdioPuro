import styled from "styled-components";

const ButtonCompBW = styled.button`
    font-size: 1.2rem;
    margin-top:20%;
    text-transform: uppercase;
    width: 55%;
    height: 3rem;
    border: none ;
    color: white;
    background-color:#2DABD3;
    border-radius: 0.7rem;
    cursor: pointer;
    &:hover {
        background-color:#A0E6FD;
        color: #2DABD3;
;
    }
`
const ButtonCompRB = styled.button`
    font-size: 1.2rem;
    text-transform: uppercase;
    width: 55%;
    height: 3rem;
    border: none ;
    color: #2DABD3;
    background-color: white;
    border-radius: 0.7rem;
    cursor: pointer;
`

export {ButtonCompBW, ButtonCompRB}