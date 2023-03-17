import React from "react";
import AdminPage from "./pages/AdminPage/adminPage";
import ProductPage from "./pages/ProductPage/productPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<ProductPage />} />
                <Route path={"/admin"} element={<AdminPage />} />
            </Routes>
        </BrowserRouter>
    )
}


export default App;
