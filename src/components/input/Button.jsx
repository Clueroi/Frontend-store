import styled from "styled-components";
import { useState } from "react";

const StyledContainer = styled.div`
    padding:20px;
`

const StyledButton = styled.button`
    border:none;
    border-bottom: ${props=>props.select ? '4px solid #ffa585' : ''}
`

function Button({children}){

    const [select, setSelect] = useState(false)

    const handleSwitch=()=>{
        setSelect(!select)
        console.log('entrou aqui')
    }

    return(
        <StyledContainer>
            <StyledButton select={select} onClick={handleSwitch}>
                {select}
            </StyledButton>
        </StyledContainer>
    )
}

export default Button
