const ProductRow = (props) => {
    return (
        <tr>
            <td>{props.productName}</td>
            <td>{props.price}</td>
        </tr>
    )
}

export default ProductRow
