import ProductRating from "../ProductRating/productRating";
import {Col} from "react-bootstrap";

function ProductItem(props){
    return (
        <Col xs={3}>
            <div>
                <h3>{props.productName}</h3>
                <img src={props.image} />
                <ProductRating star={props.rated} />
            </div>
        </Col>
    );
};

export default ProductItem;
