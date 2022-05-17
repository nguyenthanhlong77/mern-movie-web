import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"

import { Button, Navbar, Form, FormControl, NavDropdown, Container, Nav, Row, Col } from 'react-bootstrap';

index.propTypes = {
    
};

function index(props) {
    return (
       <div className="footer">
            <Container >
                <Row>
                    <Col className="col-lg-4 col-6" >
                        
                            <Nav.Link className="footer-link" href="#/phim-le/hanh-dong" >Phim hành động</Nav.Link>
                            <Nav.Link className="footer-link" href="#/phim-le/kiem-hiep">Phim kiếm hiệp</Nav.Link>
                            <Nav.Link className="footer-link" href="#/phim-le/kinh-di">Phim kinh dị</Nav.Link>
                            <Nav.Link className="footer-link" href="#/phim-le/vien-tuong">Phim viễn Tưởng</Nav.Link>
                            <Nav.Link className="footer-link" href="#/phim-le/">Phim Hoạt hình</Nav.Link>
                        
                    </Col>
                    <Col className="col-lg-4 col-6" >
                        
                            <Nav.Link className="footer-link" href="#/phim-le/">Phim siêu anh hùng</Nav.Link>
                            <Nav.Link className="footer-link" href="#/phim-le/">Phim tình cảm</Nav.Link>
                            <Nav.Link className="footer-link" href="#/phim-le/">Phim tài liệu</Nav.Link>
                            <Nav.Link className="footer-link" href="#/phim-le/">Phim hài</Nav.Link>
                            <Nav.Link className="footer-link" href="#/phim-le/">Phim thảm họa</Nav.Link>
                        
                    </Col>
                    <Col className="col-lg-4 col-6" >
                        
                            <Nav.Link className="footer-link" href="#/phim-bo/">Phim bộ Hàn Quốc</Nav.Link>
                            <Nav.Link className="footer-link" href="#/phim-bo/">Phim bộ Trung Quốc</Nav.Link>
                            <Nav.Link className="footer-link" href="#/phim-bo/">Phim bộ Mỹ</Nav.Link>
                            <Nav.Link className="footer-link" href="#/phim-bo/">Phim bộ Việt Nam</Nav.Link>
                            <Nav.Link className="footer-link" href="#/phim-bo/">Phim bộ Hồng Kông</Nav.Link>
                        
                    </Col>
                </Row>  
            </Container>
       </div>

    );
}

export default index;