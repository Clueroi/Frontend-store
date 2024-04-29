import useProducts from "@/hooks/useProducts"

function ProductsList(){
    const {data} = useProducts()
    console.log('data',data)
    return(
        <></>
    )
}

export default ProductsList