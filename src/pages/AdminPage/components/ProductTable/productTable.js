import {useEffect, useState} from "react";
import axios from "axios";
import productService from "../../../../common/api/productService";

const ProductTable = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        productService.getProducts(page, 0)
            .then(response => {

            })
            .catch(error => {

            })
    }, [page])

    return (
        <div>
            <h2>Product table</h2>
        </div>
    );
};

export default ProductTable;
