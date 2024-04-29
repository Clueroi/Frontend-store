"use client"

import styled from 'styled-components'
import { Saira_Stencil_One } from 'next/font/google'

import SearchBar from '../input/searchBar'
import Cart from '../Cart/cart'

const sairaStencil = Saira_Stencil_One({
    subsets: ["latin"], 
    weight:['400'],
    })

const NavContainer = styled.div`
    display:flex;
    padding:20px 160px;
    align-items:center;
`
const StyledLogo = styled.a`
    font-weight:400;
    font-size:40px;
    line-height:60px;
    color: #5D5D6D;
    flex:1;
`

const StyledLeft = styled.div`
    display:flex;
    gap:30px;
    align-items:center;
`



function Navbar(){

    return(
        <NavContainer>  
            <StyledLogo className={sairaStencil.className}>Mínima</StyledLogo>
                <StyledLeft>
                    <SearchBar placeholder='Procurando por algo específico?'/>
                    <Cart/>
                </StyledLeft>   
        </NavContainer>
    )
}


export default Navbar