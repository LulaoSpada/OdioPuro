import { ButtonCompBW, ButtonCompRB } from "./style.jsx";

export default function Button({conteudo, estilo}) {
    
    if (estilo == 1)
    {
        return (
            <ButtonCompBW>{conteudo}</ButtonCompBW>
        )
    }
    else
    {
        return(
            <ButtonCompRB>{conteudo}</ButtonCompRB>
        )
    }
    
}