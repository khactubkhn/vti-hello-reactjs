import React from 'react'

class AddProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.productNameInput = React.createRef();
    }

    onProductNameChange = (e) => {
        this.setState({
            productName: e.target.value
        })
    }

    handleAddProductButtonClicked = () => {
        console.log('Add product: ', this.productNameInput.current.value);
    }

    render() {
        return (
            <React.Fragment>
                <input
                    ref={this.productNameInput}
                    type="text"
                    placeholder={"Nhap vào tên sản phẩm"}/>
                <button onClick={this.handleAddProductButtonClicked}>Thêm sản phẩm</button>
            </React.Fragment>
        )
    }
};

export default AddProductForm;
