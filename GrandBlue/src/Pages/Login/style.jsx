import styled from "styled-components";

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
const Paragrafo1 = styled.p`
    
    margin: 0 3rem 4rem 3rem;
    font-size: 0.9rem;
    text-align:center;

`;

const InputLogin = styled.div`
    display: flex;
    gap: 6px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 20%;
    width: 100%;
`

const Buttons = styled.div`
    
    display: flex;
    flex-direction: row;
    width:80%;
    gap: 30px;

`;
const ButtonsCad = styled.div`
    
    display:flex;
    align-items:center;
    justify-content:center;
    width:80%;
    margin: 4rem 0 0 0;

`;
const ImageLogo = styled.div`

    width: 10rem;
    height: 10rem;
    display:flex;
    justify-content:center;
    align-items:center;
    margin: 5rem 0 0 0;

`;



export {ContainerLogin, LoginBox, TituloLogin, InputLogin, Paragrafo1, Buttons, ButtonsCad, ImageLogo} 