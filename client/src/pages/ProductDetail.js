import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import '../styles/ProductDetails.css';

const ProductDetail = props => {
  const match = useRouteMatch();
  //disabling the Add to cart button when the time is not available
  const [isAvailable, setIsAvailable] = useState(true);
  const item = props.product.filter(cur => cur.id == match.params.id)[0];
  console.log(item);
  if (item.drop_time > 1000) {
    setIsAvailable(false);
  }

  // {/* {props.product.map(item => {
  //   {/* if (match.params.id == item.id) { */}
  //     // expecting UNIX time in drop_time field
  //     // if (item.drop_time > 1000) {
  //     //   setIsAvailable(false);
  //     // } */}

  // the below issue may be because we are confusing an item and an array

  return (
    <>
      <div className="product_container">
        <div className="product_photo">
          <img src={item.image} key={item.id}></img>
        </div>
        <div className="product_info">
          <p className="brand">Item Brand</p>
          <p className="product_name">Product name</p>
          <p className="price">Price</p>
          <button
            className="add_to_cart"
            disabled={!isAvailable}
            onClick={() => console.log('you clicked me')}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

//   } else {
//     return null;
//   }
// })}

export default ProductDetail;
