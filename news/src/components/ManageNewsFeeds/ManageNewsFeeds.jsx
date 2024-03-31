import {
    Row,Col,Nav,Container,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import NewsList from "../NewsList/NewsList";
import { useState } from "react";


function ManageNews() {
    const [category,setCategory] = useState("");

    const handleCategoryClick = (cetegory) => {
      setCategory(cetegory);
    };
    

    return(
       <>
         <Container className="pt-4 text-white">
            <Row>
                <Col xs={12} md={3}>
                    <h5 className="text-primary">Categories</h5>
                    <Nav className="flex-column">
                        <Nav.Link style={{ color: 'black' }} onClick={()=> handleCategoryClick("world")}>World</Nav.Link>
                        <Nav.Link style={{ color: 'black' }} onClick={()=> handleCategoryClick("business")}>Business</Nav.Link>
                        <Nav.Link style={{ color: 'black' }} onClick={()=> handleCategoryClick("technology")}>Technology</Nav.Link>
                        <Nav.Link style={{ color: 'black' }} onClick={()=> handleCategoryClick("sports")}>Sports</Nav.Link>
                        <Nav.Link style={{ color: 'black' }} onClick={()=> handleCategoryClick("entertainment")}>Entertainment</Nav.Link>
                    </Nav>
                </Col>
                <Col xs={12} md={9}>
                  <NewsList category={category}/>
                </Col>
            </Row>
         </Container>
       </>
    );
};

export default ManageNews;