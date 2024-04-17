import styled from "styled-components";
import { useState } from "react";



function CartControl(){
    const [value, setValue] = useState(0)
    
    const HandleAdd = ()=>{
        setValue(+1)
    }

    const HandleRemove = ()=>{
        setValue(-1)
        if(value < 0){
            setValue(0)
        }
    }

}