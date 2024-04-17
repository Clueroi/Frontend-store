import styled from "styled-components";
import { useState } from "react";

import CartIcon from "../icones/cartIcon";

const StyledContainer = styled.div`
    position:relative;
`

const StyledCircle = styled.div`
    width: 18px;
    height: 18px;
    border-radius: 50%;

    background: #DE3838;
    color:white;

    position:absolute;
    right:-10px;
    top:50%;

    display:flex;
    align-items:center;
    justify-content:center;

    font-size:14px;
`


function Cart(){
    const [value, setValue] = useState(0)
    return(
        <StyledContainer>
            <CartIcon/>
            {value > 0 && <StyledCircle>{value}</StyledCircle>}
        </StyledContainer>
    )
}

export default Cart