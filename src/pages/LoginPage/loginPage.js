import {Col, Container, Row} from "react-bootstrap";
import LoginForm from "./components/LoginForm/loginForm";
import './style.css'
import authService from "../../common/api/authService";
import {useNavigate} from "react-router-dom";

function LoginPage(){
    const navigate = useNavigate();
    const login = (username, password) => {
        console.log('Starting login ....');
        authService.login(username, password)
            .then(response => {
                const data = response.data;
                const token = data.accessToken;
                localStorage.setItem("token", token);
                navigate('/admin');
            })
            .catch(error => {
                alert("Rất tiếc đã xảy ra lỗi trong quá trình đăng nhập, vui lòng thử lại sau");
            })
    }
    return (
        <Container className={"login-page-container"}>
            <Row>
                <Col>
                    <h2>Đăng nhập</h2>
                </Col>
            </Row>
            <Row className={"login-form-container"}>
                <Col md={6} xl={6} xs={6} lg={6} xxl={6}>
                    <LoginForm onSubmit={login}/>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginPage;
