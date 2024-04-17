import {useContext} from 'react'

import {FilterContext} from '../contexto/filter-context'

export function useFilter(){
    return useContext(FilterContext)
}