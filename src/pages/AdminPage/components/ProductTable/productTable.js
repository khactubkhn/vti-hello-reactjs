import {Table} from "react-bootstrap";
import ProductRow from "../ProductRow/productRow";
import './style.css'

const ProductTable = (props) => {
    return (
        <div className={"product-table"}>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Tên sản phẩm</th>
                    <th>Giá sản phẩm</th>
                </tr>
                </thead>
                <tbody>
                {
                    props.products.map(product => {
                        return (
                            <ProductRow
                                productName={product.productName}
                                price = {product.price}
                                key={product.id} />
                        )
                    })
                }
                </tbody>
            </Table>
        </div>
    );
};

export default ProductTable;
