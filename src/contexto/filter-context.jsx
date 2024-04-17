"use client"

import { createContext, useState } from "react";

import { FilterType } from "@/types/filter-types";

export const FilterContext = createContext({
    search:'',
    page:0,
    type:FilterType.ALL,
    setSearch:(value)=>{},
    setPage:(value)=>{},
    setType:(value)=>{}
})

export function FilterContextProvider({children}){
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)
    const [type, setType] = useState(FilterType.ALL)

    return (
        <FilterContext.Provider value={{search, page, type, setSearch, setPage, setType}} >
            {children}
        </FilterContext.Provider>
    )
}