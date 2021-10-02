import React from 'react';
import '../styles/admin.css';

const Admin = props => {
  return (
    <div className="admin_container">
      <form>
        <h2>Product Entry Form</h2>
        <div>
          <input type="text" required placeholder="Brand Name"></input>
          <label htmlFor="brand_name"></label>
        </div>
        <div>
          <input type="text" required placeholder="Product Name"></input>
          <label htmlFor="product_name"></label>
        </div>
        <div>
          <input type="time" required placeholder="Product Price"></input>
          <label htmlFor="product_price"></label>
        </div>
        <div>
          <input type="text" required placeholder="Photo URL"></input>
          <label htmlFor="url_photo"></label>
        </div>
      </form>
    </div>
  );
};

export default Admin;
