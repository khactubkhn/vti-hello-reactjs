import React, {useRef, useState} from 'react'
import {Button, Form} from "react-bootstrap";

const AddProductForm = (props) => {
    const [productName, setProductName] = useState('');
    const [productPrice, setPrice] = useState('');

    const handleSubmitForm = () => {
        if(props.onSubmit){
            const newProduct = {
                id: uuid(),
                productName: productName,
                price: productPrice
            }
            props.onSubmit(newProduct);
        }
    }

    const uuid = () =>  {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
            .replace(/[xy]/g, function (c) {
                const r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
    }


    return (
        <Form>
            <Form.Group className="mb-3" controlId="productName">
                <Form.Label>Tên sản phẩm</Form.Label>
                <Form.Control onChange={(e) => setProductName(e.target.value)} value={productName}
                              placeholder="Nhập vào tên sản phẩm"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="productPrice">
                <Form.Label>Giá sản phẩm</Form.Label>
                <Form.Control onChange={(e) => setPrice(e.target.value)} value={productPrice}
                              placeholder="Giá sản phẩm"/>
            </Form.Group>
            <Button variant="primary" onClick={handleSubmitForm}>
                Thêm sản phẩm
            </Button>
        </Form>
    )
}

export default AddProductForm;
