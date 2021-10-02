import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/products.css';

const Products = props => {
  return (
    <div className="container ">
      {props.product &&
        props.product.map(item => (
          <Link to={`/product/${item.id}`} key={item.id}>
            <div className="box">
              <img src={item.image}></img>
            </div>
            <div className="product">
              <p>Brand Name</p>
              <p>Product Name</p>
              <p>Price</p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Products;
/*<img src={item.Poster} alt="product"></img> */
