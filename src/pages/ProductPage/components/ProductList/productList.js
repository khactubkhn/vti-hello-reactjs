import React, {useEffect, useState} from "react";
import ProductItem from "../Product/productItem";
import {Row} from "react-bootstrap";
import Paging from "../../../../common/components/Pagination/pagination";
import productService from "../../../../common/api/productService";
import {useDispatch, useSelector} from "react-redux";
import productActions from "../../redux/actions";

function ProductList() {
    // const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);

    const dispatch = useDispatch();
    const products = useSelector(state => state.products)


    // function fetchProducts(page, size){
    //     productService.getProducts(page, size)
    //         .then(response => {
    //             console.log(response);
    //             const data = response.data;
    //             const products = data.content;
    //             setProducts(products);
    //             setTotalPage(data.totalPages);
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }

    useEffect(() => {
        //Call API get products
        // fetchProducts(page, 10);
        dispatch(productActions.fetchProducts(page, 10));
        // dispatch(productActions.productsFetched([]));
    }, [page])


    return (
        <React.Fragment>
            <Row>
                {
                    products.map(product => {
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
                <Paging page={page + 1}
                        totalPage={totalPage}
                        onPageClick={(page) => {setPage(page - 1)}}
                />
            </Row>
        </React.Fragment>
    )
}
export default ProductList;
