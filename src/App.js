import React from "react";
import AdminPage from "./pages/AdminPage/adminPage";
import ProductPage from "./pages/ProductPage/productPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage/loginPage";
import WithAuth from "./common/hoc/WithAuth/withAuth";
import CounterPage from "./pages/Counter/counterPage";
import {Provider} from 'react-redux';
import store from './store/store';
import StyledComponent from './pages/StyledComponent/styledComponent';

const AdminWithAuth = WithAuth(AdminPage);

function App(){
    return (
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path={"/"} element={<ProductPage />} />
              <Route path={"/admin"} element={<AdminWithAuth/>} />
              <Route path={"/login"} element={<LoginPage />} />
              <Route path={"/counter"} element={<CounterPage />} />
              <Route path={"/styled"} element={<StyledComponent/>} />
            </Routes>
          </BrowserRouter>
        </Provider>
    )
}


export default App;
