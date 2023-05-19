import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const WithAuth = (WrappedComponent) => {
    const HOC = (props) => {
        const navigate = useNavigate();
        useEffect(() => {
           const token = localStorage.getItem("token");
           if(token === null || token === undefined){
               navigate('/login');
           }
        });
        return <WrappedComponent {...props} />
    }
    return HOC
}

export default WithAuth;