import { Buttons, ContainerLogin, InputLogin, LoginBox, TituloLogin, Paragrafo1, ButtonsCad, ImageLogo } from "../Login/style.jsx"
import Input from "../../Components/Input/input.jsx"
import Button from "../../Components/Button/button.jsx"
import logo from "../../Assets/grandblue.svg"



export function Cadastro(){
    return(
        <ContainerLogin>
        <LoginBox>

        <ImageLogo>
            <img src=   {logo}/>
        </ImageLogo>
        <TituloLogin>Cadastre-se</TituloLogin>
        <Paragrafo1>Preecha o campos para se cadastrar em nossa página</Paragrafo1>

        <InputLogin>
            <Input type="text" placeholder="Digite seu nome"/>
            <Input type="text" placeholder="Insire seu E-mail"/>
            <Input type="password" placeholder="Digite sua senha"/>
            <Input type="password" placeholder="Confirme sua senha"/>
        </InputLogin>
        
        <ButtonsCad> 
            <Button conteudo="Cadastrar" estilo={1} />
        </ButtonsCad>

        </LoginBox>
        </ContainerLogin>
    )
}