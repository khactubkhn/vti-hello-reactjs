import Header from "./components/Header/header";
import Banner from "./components/Banner/banner";
import {products} from "./data/products";
import ProductItem from "./components/Product/productItem";
import {Container, Row} from "react-bootstrap";

function App() {
    return (
       <div>
           <Header/>
           <Container>
               <Row>
                   {
                       products.map(prod => {
                           return (
                               <ProductItem  {...prod}/>
                           )
                       })
                   }
               </Row>
           </Container>
       </div>
    );
}

export default App;
