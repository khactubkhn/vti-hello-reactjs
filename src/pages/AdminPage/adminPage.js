import React, {useState} from "react";
import AddProductForm from "./components/AddProductForm/addProductForm";
import ProductTable from "./components/ProductTable/productTable";
import Header from "../../common/components/Header/header";
import {Container, Row} from "react-bootstrap";
import Banner from "../../common/components/Banner/banner";
import ProductList from "../ProductPage/components/ProductList/productList";


function AdminPage() {
    const [products, setProducts] = useState([
        {
            id: "63bbe1b1d3110225b4214dab",
            productName: "Laptop Dell XPS 2024",
            brand: "Oppo",
            rated: 2,
            price: 3000000,
            image: "https://cdn.tgdd.vn/Products/Images/522/269327/ipad-pro-m1-11-inch-wifi-1tb-2021-bac-thumb-600x600.jpeg"
        }
    ]);

    const handleAddProduct = (product) => {
        console.log(product);
        setProducts([...products, product])
    }

    return (
        <div>
            <Header/>
            <Container>
                <Row>
                    <AddProductForm onSubmit={handleAddProduct} />
                </Row>
                <Row>
                    <ProductTable products={products} />
                </Row>
            </Container>
        </div>
    )
};

export default AdminPage
