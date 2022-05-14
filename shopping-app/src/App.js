import { Component } from "react";
import ProductCatalog from "./Components/ProductCatalog";
import ShopNavbar from "./Components/ShopNavbar";
import CategoryItems from "./Components/CategoryItems";
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Cart from "./Cart";

class App extends Component {
  constructor() {
    super()
    this.state = {
      cartProducts: [],
      total: 0
    }
  }

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

  render() {
    console.log(this.state.cartProducts);
    return (
      <BrowserRouter>
        <ShopNavbar />
        <Routes>
          <Route
            path='/'
            element={<ProductCatalog handleAddToCart={this.handleAddToCart} />}
          />
          <Route
            path=':categoryName'
            element={<CategoryItems />} />
          <Route path='cart'
            element={<Cart cartProducts={this.state.cartProducts} total={this.state.total} />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
