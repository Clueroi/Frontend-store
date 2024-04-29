"use client"

import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const api = process.env.NEXT_PUBLIC_API_URL

const fetcher = async () =>{
    const response = await axios.post(api, 
    {
      query:
        ` query {
            allProducts{
              id
              name
              price_in_cents
              image_url
            }
          } `
    }
)
return console.log('response', response)
}


function useProducts(){
  const { data } = useQuery({
      queryFn: fetcher,
      queryKey: ['products']
  })

  return {
      data: data ? data.allProducts : []
  }    
}
  

export default useProducts