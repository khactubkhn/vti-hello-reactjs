import React from "react";
import AddProductForm from "./components/AddProductForm/addProductForm";
import ProductTable from "./components/ProductTable/productTable";


class AdminPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h2>Quản lý sản phẩm</h2>
                <ProductTable />
            </React.Fragment>
        )
    };
};

export default AdminPage
