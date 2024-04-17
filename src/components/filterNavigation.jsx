"use client"

import styled from "styled-components";

import {useFilter} from '../hooks/useFilter'
import { FilterType } from "@/types/filter-types";


const Styledul = styled.ul`
    display:flex;
    align-items:left;
    justify-content:flex-start;
    gap:40px;
`

const StyledList = styled.li`
    font-family: inherit;
    font-size: 16px;
    font-weight: ${props=> props.selected ? '600' : '400'};
    line-height: 22px;
    text-align: center;
    list-style-type: none;
    text-transform:uppercase;

    height: 22px;

    border-bottom: ${props=> props.selected ? "4px solid #ffa585" : ""};

    cursor:pointer;

`

function FilterNav(){

    const {type, setType} = useFilter()

    const handleChange =(value)=>{
        setType(value)
    }

    return(
        <Styledul>
            <StyledList selected={type === FilterType.ALL} onClick={()=>{handleChange(FilterType.ALL)}}>Todos os produtos</StyledList>
            <StyledList selected={type === FilterType.SHIRT} onClick={()=>{handleChange(FilterType.SHIRT)}}>Camisetas</StyledList>
            <StyledList selected={type === FilterType.MUG} onClick={()=>{handleChange(FilterType.MUG)}}>Canecas</StyledList>
        </Styledul>
    )
}

export default FilterNav