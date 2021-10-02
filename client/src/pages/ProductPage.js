import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import Products from './Products';
import image1 from '../assets/NewImages/image5.png';
import image2 from '../assets/NewImages/image6.png';
import image3 from '../assets/NewImages/image7.png';
import image4 from '../assets/NewImages/image8.png';
import '../styles/products.css';

//created a functional component that will iterate thru the response JSON
const ProductPage = props => {
  const images = [image1, image2, image3, image4];

  const [product, setProduct] = useState([
    { image: images[0], id: 1, drop_time: 10000 },
    { image: images[1], id: 2, drop_time: 10000 },
    { image: images[2], id: 3, drop_time: 10000 },
    { image: images[3], id: 4, drop_time: 10000 },
  ]);

  const getProduct = () => {
    setProduct(product);
    // 	fetch(`api/products`)
    // 		.then((response) => response.json())
    // 		.then((data) => {
    // 			setProduct();
    // 			console.log(data);
    // 		})
    // 		.catch((error) => console.error(error));
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/product/:id"
          render={() => <ProductDetail product={product} />}
        />
        ;
        <Route
          exact
          path="/product"
          render={() => <Products product={product} />}
        />
      </Switch>
    </Router>
  );
};

export default ProductPage;
// <Route exact path="/product/:id" render={() => <ProductDetail product={product} />} />;
