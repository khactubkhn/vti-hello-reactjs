function ProductItem(props){
    return (
        <div>
            <h3>{props.productName}</h3>
            <img src={props.image} />
        </div>
    );
};

export default ProductItem;
