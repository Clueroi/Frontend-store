"use client"

import { createContext, useState } from "react";

import { FilterType} from "@/types/filter-types";
import { PriorityType } from "@/types/priority-type";


export const FilterContext = createContext({
    search:'',
    page:0,
    type:FilterType.ALL,
    priority: PriorityType.NEWS,
    setSearch:(value)=>{},
    setPage:(value)=>{},
    setType:(value)=>{},
    setPriority:(value)=>{}
})

export function FilterContextProvider({children}){
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)
    const [type, setType] = useState(FilterType.ALL)
    const [priority, setPriority] = useState(PriorityType.NEWS)

    return (
        <FilterContext.Provider value={{
            search, 
            page, 
            type, 
            setSearch, 
            setPage, 
            setType, 
            priority, 
            setPriority
            }}>
            {children}
        </FilterContext.Provider>
    )
}