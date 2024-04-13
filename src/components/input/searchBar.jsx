import styled from "styled-components";

import SearchIcon from "../icones/searchIcon";

const Container = styled.div`
    position:relative;
    display:flex;

    svg{
        position:absolute;
        right:20px;
        top:50%;
        transform: translateY(-50%);
        cursor:pointer;
    }
`

const SearchContainer = styled.input`

    width:352px;
    padding:10px 16px;
    border-radius: 8px;
    background: #F3F5F6;
    border:none;


    font-family:inherit;
    font-weight:400;
    font-size: 14px;
`


function SearchBar({placeholder}){
    return(
        <Container>
            <SearchContainer placeholder={placeholder}/>
            <SearchIcon/>
        </Container>
    )
}


export default SearchBar