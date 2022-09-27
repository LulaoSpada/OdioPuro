import { ContainerLogin, ImageLogo, InputLogin, LoginBox, TituloLogin } from "./style.jsx"
import Input from "../../Components/Input/input.jsx"
import logo from "../../Assets/grandblue.svg"
import { ButtonCompBW, ButtonCompRB } from "../../Components/Button/style.jsx"
import Button from "../../Components/Button/button.jsx"




export function Login(){
    return(
        <ContainerLogin>
        <LoginBox>

        <ImageLogo>
            <Image></Image>
        </ImageLogo>
        <TituloLogin>Bem Vindo à Grand Blue</TituloLogin>
        

        <InputLogin>
            <Input type="text" placeholder="Email"/>
            <Input type="password" placeholder="Senha"/>
        </InputLogin>

            <Button conteudo="Entre" estilo={1}/>
            <Button conteudo="Cadastre-se"/>

        
        </LoginBox>
        </ContainerLogin>
    )
}