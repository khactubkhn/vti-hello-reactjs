import React from "react";
import AdminPage from "./pages/AdminPage/adminPage";
import ProductPage from "./pages/ProductPage/productPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage/loginPage";
import WithAuth from "./common/hoc/WithAuth/withAuth";
import CounterPage from "./pages/Counter/counterPage";

const AdminWithAuth = WithAuth(AdminPage);

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<ProductPage />} />
                <Route path={"/admin"} element={<AdminWithAuth/>} />
                <Route path={"/login"} element={<LoginPage />} />
                <Route path={"/counter"} element={<CounterPage />} />
            </Routes>
        </BrowserRouter>
    )
}


export default App;
