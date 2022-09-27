import { ButtonLogin, ContainerLogin, InputLogin, LoginBox, TituloLogin } from "./style.jsx"
import Input from "../../Components/Input/input.jsx"
import Button from "../../Components/Button/button.jsx"
import logo from "../../Assets/grandblue.svg"



export function Cadastro(){
    return(
        <ContainerLogin>
        <LoginBox>

        <img src={logo} />
        <TituloLogin>Cadastre-se</TituloLogin>
        

        <InputLogin>
            <Input type="text" placeholder="Digite seu nome"/>
            <Input type="text" placeholder="Digite seu email"/>
            <Input type="text" placeholder="Informe seu CPF"/>
            <Input type="password" placeholder="Digite sua senha"/>
            <Input type="password" placeholder="Confirme sua senha"/>
        </InputLogin>

      

        </LoginBox>
        </ContainerLogin>
    )
}