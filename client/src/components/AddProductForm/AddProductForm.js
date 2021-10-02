import React, { useState } from 'react';
import '../../styles/AddProductForm.css';

export default function AddProductForm() {
  const [brandName, setBrandName] = useState('');
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [dropTime, setDropTime] = useState('');
  const [imgURL, setImgUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  //declared a function handler that will make a post request onSubmit
  const handleFormSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    productPostRequest();
  };
  // post to api/products
  const productPostRequest = async () => {
    const body = JSON.stringify({ productName: product });
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // state/input values will get attached to the req.body
      body,
    };
    await fetch('/api/products', options);
    setProductName('4');
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <form className="product_form" onFormSubmit={handleFormSubmit}>
          <div>
            <h2>Add Product Form</h2>
          </div>
          <div>
            <label htmlFor="brand-name">Brand Name:</label>
            <input
              id="brand-name"
              type="text"
              placeholder="Brand Name"
              name="brand-name"
              value={brandName}
              onChange={e => setBrandName(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="product-name">Product Name:</label>
            <input
              id="product-name"
              type="text"
              placeholder="Product Name"
              name="product-name"
              value={productName}
              onChange={e => setProductName(e.target.value)} //luis
            ></input>
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              id="price"
              type="number"
              placeholder="Price"
              name="price"
              value={price}
              onChange={e => setPrice(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="drop-time">Drop Time:</label>
            <input
              id="drop-time"
              type="datetime-local"
              placeholder="Drop Time"
              name="drop-time"
              value={dropTime}
              onChange={e => setDropTime(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="img-url">Image URL:</label>
            <input
              id="img-url"
              type="text"
              placeholder="Image URL"
              name="img-url"
              value={imgURL}
              onChange={e => setImgUrl(e.target.value)}
            ></input>
          </div>
          <div className="add_product_btn">
            <input type="Submit" value="Add Product" disabled={isLoading} />
          </div>
        </form>
      )}
    </>
  );
}

/*
    - brandName
    - product name
    - price
    - drop_time
    - imgURL
    
    
*/
