import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './pages/Home';
import Navigation from './components/Navigation/Navigation';
import ProductPage from './pages/ProductPage';
import About from './pages/About';
import Cart from './pages/Cart';
import RegisterForm from './components/RegisterForm/RegisterForm';
import AddProductForm from './components/AddProductForm/AddProductForm';

const history = createBrowserHistory();

const App = props => {
  //create a function that will make fetch request to an api end point
  // const getProduct = () => {
  //   //	const item = product;
  //   //const response = await fetch(item);
  //   //const responseJson = await response.json();
  //   //	console.log();
  //   // setProduct(product);
  // };

  //declare a useEffect to re-render the page everytime theres a search request
  // useEffect(() => {
  // 	getProduct();
  // }, []);

  return (
    <Router history={history}>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product" component={ProductPage} />
        <Route path="/about" exact component={About} />
        <Route path="/signin" exact component={RegisterForm} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/admin" exact component={AddProductForm} />
      </Switch>
    </Router>
  );
};

export default App;
