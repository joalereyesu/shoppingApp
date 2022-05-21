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
// import SignUp from "./Components/SignUp";

class App extends Component {
  constructor() {
    super()
    this.state = {
      cartProducts: [],
      total: 0,
      categories: [],
      error: '',
      posted: 0
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

  handlePostCart = async () => {
    try {
      const response = await axios.post('https://dummyjson.com/carts/add',
        {
          userId: 1,
          products: this.state.cartProducts,
          total: this.state.total

        });
      console.log(response);
      this.setState({ posted: 1 });
      console.log(this.state.posted);
    }
    catch (error) {
      this.setState({ error: error })
    }
    // this.setState({ posted: 1 });
    // console.log(this.state.posted);
    // axios.post('https://dummyjson.com/carts/add',
    //   {
    //     userId: 1,
    //     products: this.state.cartProducts,
    //     total: this.state.total

    //   })
    //   .then(function (response) {
    //     console.log(response)
    //   })
    // fetch('https://dummyjson.com/carts/add', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     userId: 1,
    //     products: this.state.cartProducts,
    //     total: this.state.total
    //   })
    // })
    //   .then((res) =>
    //     res.json(),
    //     this.setState({ posted: 1 }))
    //   .then(console.log);
    // console.log(this.state.posted);
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
        <ShopNavbar categories={this.state.categories} products={this.state.cartProducts} total={this.state.total} handleDelete={this.handleDelete} handlePostCart={this.handlePostCart} posted={this.state.posted} />
        <Routes>
          <Route
            path='/'
            element={<ProductCatalog handleAddToCart={this.handleAddToCart} />}
          />
          {/* <Route
            path='/signup'
            element={<SignUp />}>
          </Route> */}
          <Route
            path=':categoryName'
            element={<CategoryItems />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
