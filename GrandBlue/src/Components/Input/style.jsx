import styled from "styled-components";

const InputComp = styled.input`
    background: #D4D4D4;
    
    width: 80%;
    height: 3rem;
    padding: 1rem;
    border-radius: 7px;
    border: none;
    outline: none;
    color: #2DABD3;
    font-size: 1rem;
    font-weight: bold;
    &:focus {
        display: inline-block;
        box-shadow: 0 0 0 0.1rem #2DABD3;
        background-color:#A0E6FD90;
    }
    &::placeholder {
        font-weight: 100;
        font-size: 1rem;
        color: #616161;
    }
`

export { InputComp }