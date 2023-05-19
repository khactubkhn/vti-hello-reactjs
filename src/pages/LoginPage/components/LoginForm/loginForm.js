import {Button, Form} from "react-bootstrap";
import React, {useState} from "react";

const LoginForm = ({onSubmit}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmitForm = () => {
        console.log('Handle submit login form');
        if(onSubmit){
            onSubmit(username, password);
        }
    }
    
    return (
        <Form>
            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Tên đăng nhập</Form.Label>
                <Form.Control onChange={(e) => setUsername(e.target.value)} value={username}
                              placeholder="Nhập vào tên đăng nhập"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Mật khẩu</Form.Label>
                <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} value={password}
                              placeholder="Nhập vào mật khẩu"/>
            </Form.Group>
            <Button variant="primary" onClick={handleSubmitForm}>
                Đăng nhập
            </Button>
        </Form>
    )
}

export default LoginForm