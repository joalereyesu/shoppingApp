import { Component } from "react";
import axios from "axios";
import ProductCatalog from "./Components/ProductCatalog";
import ShopNavbar from "./Components/ShopNavbar";
import CategoryItems from "./Components/CategoryItems";
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import SignUp from "./Components/SignUp";

class App extends Component {
  constructor() {
    super()
    this.state = {
      cartProducts: [],
      total: 0,
      categories: [],
      error: ''
    }
  }

  fetch = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products/categories');
      console.log(response.data)
      this.setState({ categories: response.data })
    }
    catch (error) {
      this.setState({ error: error })
    }
  };

  componentDidMount() {
    this.fetch();
  };


  handleAddToCart = (product) => {
    const products = [...this.state.cartProducts];
    products.push(product);
    const price = product.price;
    this.setState(
      {
        cartProducts: products,
        total: this.state.total + price
      }
    )
  }

  handleDelete = (index) => {
    const products = [...this.state.cartProducts];
    const selected = products[index];
    const price = selected.price;
    products.splice(index, 1);
    this.setState({ ...this.state, cartProducts: products, total: this.state.total - price });
  }

  render() {
    return (

      <BrowserRouter>
        <ShopNavbar categories={this.state.categories} products={this.state.cartProducts} total={this.state.total} handleDelete={this.handleDelete} />
        <Routes>
          <Route
            path='/'
            element={<ProductCatalog handleAddToCart={this.handleAddToCart} />}
          />
          <Route
            path='/signup'
            element={<SignUp />}>
          </Route>
          <Route
            path=':categoryName'
            element={<CategoryItems />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
