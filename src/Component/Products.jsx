import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from "styled-components";
// import { popularProducts } from '../data';
import Product from './Product';


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
function Products({cat, filter , sort}) { 
  // console.log(cat, filter , sort)
  const[products , setProducts] = useState([]) 
  const [filterproduct , setFilterproduct] = useState([])

  useEffect(()=>{
   const getProducts = async ()=>{
     try{
          const res = await axios.get( cat ?`https://cryptic-taiga-35912.herokuapp.com/api/products=${cat}` : "https://cryptic-taiga-35912.herokuapp.com/api/products")
          console.log(res)
          setProducts(res.data)
     }catch(err){
    console.log(err)
     }
   };
   getProducts();
  }, [cat])
  useEffect(() => {
    cat &&
    setFilterproduct(
        products.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filter]);

  
  useEffect(() => {
    if ( sort === "newest") {
      setFilterproduct((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilterproduct((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilterproduct((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
    return (
        <Container>
       {cat
        ? filterproduct.map((item) => <Product item={item} key={item._id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
      </Container>
    )
}

export default Products
