import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Products = () => {
    const [products,setProducts] = useState([])

    useEffect(()=>{
        getProducts()
    },[])

    const getProducts = async ()=>{
        const res = await axios.get("http://localhost:5000/products")
        console.log(res.data)
        setProducts(res.data)
    }

  return (
    <div>
      <table className='products' width={800}>
        <thead >
            <tr>
                <th>id</th>
                <th>name</th>
                <th>price</th>
            </tr>
        </thead>
        <tbody>
            {
               products.map((product)=>{
                return(
                    <tr key={product.id}>
                        <th>{product.id}</th>
                        <th>{product.name}</th>
                        <th>{product.price}</th>
                    </tr>
                )
               }) 
            }
        </tbody>
      </table>
    </div>
  )
}

export default Products
