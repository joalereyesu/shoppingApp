import React, { Component } from "react";
import axios from 'axios';
import { Row, Col, Card, Container } from 'react-bootstrap'
import { Button } from "bootstrap";
import './styles.css'

class ProductCatalog extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            error: '',
            limit: -1
        }
    }
    fetch = async () => {
        const skip = Math.floor(Math.random() * (100))
        try {
            const response = await axios.get(`https://dummyjson.com/products?limit=35&skip=${skip}&select=title,description,price,images`);
            const allProducts = response.data.products;
            console.log(allProducts);
            const limit = response.data.limit;
            this.setState({ products: allProducts, limit: limit })
        }
        catch (error) {
            this.setState({ error: error })
        }
    }
    render() {
        return (
            <Container>
                <h1 className='h_products'>Popular porducts</h1>
                <p>{this.state.products[0]}</p>
                <Row xs={1} md={2} className='g-4'>
                    {this.state.products.map((product) =>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={product.images[1]}>
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Subtitle>{product.price}</Card.Subtitle>
                                        <Card.Text>
                                            {product.description}
                                        </Card.Text>
                                        <Button variant='dark' className='justify-content-md-center'>Add to cart</Button>
                                    </Card.Body>
                                </Card.Img>
                            </Card>
                        </Col>
                    )}

                </Row>
            </Container>
        );
    }
}

export default ProductCatalog;