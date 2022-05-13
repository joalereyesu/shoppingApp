import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ProductCatalog from "./ProductCatalog";

export default function CategoryItems() {
    const { categoryName } = useParams();

    return (
        <Container>
            <ProductCatalog category={categoryName} />
        </Container>
    )
}