import React from 'react'
import { useParams } from 'react-router-dom';

function Product() {
    const para=useParams();
    console.log(useParams());
  return (
    <div>Product {para.id} Details</div>
    // <div>Category: {para.cat_id} Product: {para.prod_id}</div>
  )
}

export default Product