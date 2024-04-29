"use client"

import styled from "styled-components";

import FilterNav from "./filterNav/filterNavigation";
import FilterPriority from "./filterPriority/filterPriority";

const StyledContainer = styled.div`
    display:flex;
    width:100%;
    align-items:center;

    justify-content:space-between;
`

export function FilterBar(){
    return(
        <StyledContainer>
            <FilterNav/>
            <FilterPriority/>
        </StyledContainer>
    )
}