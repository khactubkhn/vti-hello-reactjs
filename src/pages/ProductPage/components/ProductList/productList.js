import React from "react";
import axios from "axios";
import ProductItem from "../Product/productItem";
import {Row} from "react-bootstrap";
import Paging from "../../../../common/components/Pagination/pagination";
import productService from "../../../../common/api/productService";

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            page: 0,
            totalPage: 0,
            username: ''
        }
    }

    fetchProducts(page, size){
        productService.getProducts(page, size)
            .then(response => {
                const data = response.data;
                const products = data.content;
                this.setState({
                    products: products,
                    totalPage: data.totalPages
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    componentDidMount() {
        this.fetchProducts(this.state.page, 10);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.page !== this.state.page){
            this.fetchProducts(this.state.page, 10);
        }
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    {
                        this.state.products.map(product => {
                            return (
                                <ProductItem
                                    key={product.id}
                                    {...product}
                                />
                            )
                        })
                    }
                </Row>
                <Row>
                    <Paging page={this.state.page + 1}
                            totalPage={this.state.totalPage}
                            onPageClick={(page) => {this.setState({page: page-1})}}
                    />
                </Row>
            </React.Fragment>
        )
    }
}
export default ProductList;
