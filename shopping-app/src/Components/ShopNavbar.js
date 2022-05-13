import { Component } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap'
import axios from 'axios';

class ShopNavbar extends Component {
    constructor() {
        super()
        this.state = { categories: [], error: '' }
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
    }

    componentDidMount() {
        this.fetch();
    };

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Shopping App</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Categories" id="navbarScrollingDropdown">
                            {this.state.categories.map((category) => (
                                <NavDropdown.Item href={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </Nav>
                    <Button variant="outline-light" href='/cart'>Go to cart</Button>
                </Container>
            </Navbar>
        );
    }
}

export default ShopNavbar;