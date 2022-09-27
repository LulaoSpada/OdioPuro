import styled from "styled-components";
import logo from '../../Assets/grandblue.svg'

const ContainerLogin = styled.div`
    height: 100vh;
    width: 100vw;
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');
    font-family: 'Raleway', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

const LoginBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 80vh;
    width: 30vw;
    
    background-color: white;
    backdrop-filter: blur(8.5px);
    border-radius: 5px;
    color: black;
    -webkit-box-shadow: 1px 1px 6px 0px #000000; 
    box-shadow: 1px 1px 6px 0px #000000;
    
    text-transform: uppercase;
 
`

const TituloLogin = styled.h2`
    margin: 3rem 0 2rem 0;
   
`

const InputLogin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 20%;
    width: 100%;
`

const ButtonLogin = styled.div`
    margin: 1rem 0 2rem 0;
    margin-top: 20%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ImageLogo = styled.img`

    background: ${logo};
    width:14rem;

`;

export {ContainerLogin, LoginBox, TituloLogin, InputLogin, ButtonLogin, ImageLogo}