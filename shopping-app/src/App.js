import { Component } from "react";
import ProductCatalog from "./Components/ProductCatalog";
import ShopNavbar from "./Components/ShopNavbar";
import CategoryItems from "./Components/CategoryItems";
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

class App extends Component {
  constructor() {
    super()
    this.state = {
      cartProducts: [],
      total: 0
    }
  }

  handleAddToCart = (index) => {

  }

  render() {
    return (
      <BrowserRouter>
        <ShopNavbar />
        <Routes>
          <Route path='/' element={<ProductCatalog />} />
          <Route path=':categoryName' element={<CategoryItems />} />
          <Route path='products' />
          <Route path='cart' />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
