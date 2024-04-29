"use client"

import styled from "styled-components";
import { useState } from "react/";

import ArrowIcon from "@/components/icones/arrowIcon";
import { useFilter } from "@/hooks/useFilter";
import { PriorityType } from "@/types/priority-type";

const StyledContainer = styled.div`
    display:flex;
    align-items:center;
    position:relative;

`

const StyledSpan = styled.button`
    font-family:inherit;
    font-weight:400;
    font-size:14px;
    line-height:22px;
    cursor:pointer;

    border:none;

    display:flex;
    align-items:center;
`
const StyledFilter = styled.ul`
    position:absolute;
    top:100%;

    padding:12px 16px;
    width: 170px;
    height: 130px;
    border-radius: 4px;

    list-style:none;
    box-shadow:0px 4px 12px rgba(0,0,0,0.3);

    li + li {
        margin-top:4px;
    }
`

const StyledList = styled.li`
    font-size:14px;
    line-height:22px;
    font-weight:400;
    cursor:pointer;
    
`


function FilterPriority(){

    const [isOpen, setIsOpen] = useState(false)

    const {setPriority} = useFilter()

    const handleChange = (value)=>{
        setPriority(value)
        setIsOpen(false)
    }

    const handleSwitch=()=>{
        setIsOpen(!isOpen)
    }

    return(

        
    <StyledContainer>
        <StyledSpan onClick={handleSwitch}>Organizar Por</StyledSpan>
        <ArrowIcon/>
        {isOpen && 
        <StyledFilter>
            <StyledList onClick={()=>{handleChange(PriorityType.NEWS)}} >Novidade </StyledList>
            <StyledList onClick={()=>{handleChange(PriorityType.BIG_PRICE)}}>Preço: Maior - Menor</StyledList>
            <StyledList onClick={()=>{handleChange(PriorityType.MINOR_PRICE)}}>Preço: Menor - Maior</StyledList>
            <StyledList onClick={()=>{handleChange(PriorityType.POPULARITY)}}>Mais vendidos </StyledList>
        </StyledFilter>}
    </StyledContainer>
    )
}


export default FilterPriority