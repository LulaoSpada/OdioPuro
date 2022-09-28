import { ContainerLogin, InputLogin, LoginBox, TituloLogin, Buttons, ImageLogo } from "./style.jsx"
import Input from "../../Components/Input/input.jsx"
import Logo from "../../Assets/grandblue.svg"
import { ButtonCompBW, ButtonCompRB } from "../../Components/Button/style.jsx"
import Button from "../../Components/Button/button.jsx"




export function Login(){
    return(
        <ContainerLogin>
            <LoginBox>
                <ImageLogo>
                    <img src={Logo} />
                </ImageLogo>
                

                <TituloLogin>Bem Vindo à Grand Blue</TituloLogin>
                
                <InputLogin>
                    <Input type="text" placeholder="Email"/>
                    <Input type="password" placeholder="Senha"/>
                </InputLogin>

                <Buttons>
                    <Button conteudo="Entre" estilo={1}/>
                    <Button conteudo="Ou Cadastre-se" />
                </Buttons>
            
            </LoginBox>
        </ContainerLogin>
    )
}