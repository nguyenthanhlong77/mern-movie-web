import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from "../../../access/img/logo.svg";
import "./style.scss";


const phimle =  [
    {
        "name": "Phim lẻ 2022",
        "link" : "2022"
    },
    {
        "name": "Phim lẻ 2021",
        "link" : "2021"
    },
    {
        "name": "Phim lẻ 2020",
        "link" : "2020"
    },
    {
        "name": "Phim lẻ 2019",
        "link" : "2019"
    },
    {
        "name": "Phim lẻ 2018",
        "link" : "2018"
    },
    {
        "name": "Phim lẻ 2017",
        "link" : "2017"
    },
    {
        "name": "Phim lẻ 2016",
        "link" : "2016"
    },
    {
        "name": "Phim lẻ 2015",
        "link" : "2015"
    },
    {
        "name": "Phim lẻ trước 2015",
        "link" : "truoc-2015"
    },
];
const phimbo = [
    {

        "name": "Phim bộ Hàn Quốc",
        "link": "han-quoc",
    },
    {

        "name": "Phim bộ Trung Quốc",
        "link":  "trung-quoc",
    } ,
     {

         "name": " Phim bộ Mỹ",
         "link":  "my",
     },
     {

         "name": "Phim bộ Anh",
         "link":  "anh",
     },
     {

         "name": "Anime",
         "link":  "anime",
     },
     {

         "name": "Gameshow",
         "link":  "gameshow",
     },
     {

         "name": "TV Shows",
         "link":  "tv-shows",
     },
     {

         "name": "Clip ngắn",
         "link":  "clip-ngan",
     },

];
const quocgia = [
    {

        "name": "Ấn Độ",
        "link":  "an-do",
    },
    {

        "name": "Anh",
        "link":  "anh",
    } ,
     {

         "name": "Canada",
         "link":  "canada",
     },
     {

         "name": "Châu Á",
         "link":  "chau-a",
     },
     {

         "name": "Đức",
         "link": "duc",
     },
     {

         "name": "Hàn Quốc",
         "link":  "han-quoc",
     },
     {

         "name": "Mỹ",
         "link": "my",
     },
     {

         "name": "Nga",
         "link":  "nga",
     },
     {

         "name": "Nhật Bản",
         "link":  "nhat-ban",
     },
     {

         "name": "Pháp",
         "link":  "phap",
     },
     {

         "name": "Philippines",
         "link":  "philippines",
     },
     {

         "name": "Tây Ban Nha",
         "link":  "tay-ban-nha",
     },
     {

         "name": "Thái Lan",
         "link":  "thai-lan",
     },
     {

         "name": "Trung Quốc",
         "link":  "trung-quoc",
     },
     {

         "name": "Úc",
         "link":  "uc",
     },
     {

         "name": "Việt Nam",
         "link":  "viet-nam",
     },
     {

         "name": "Quốc gia khác",
         "link":  "quoc-gia-khac",
     },

];
const theloai = [
    {

        "name": "Không thể bỏ lỡ",
        "link":  "khong-the-bo-lo",
    },
    {

        "name": "Phim 18+",
        "link":  "phim-18",
    } ,
     {

         "name": "Phim chiếu rạp",
         "link":  "phim-chieu-rap",
     },
     {

         "name": "Phim mới",
         "link":  "phim-moi",
     },
     {

         "name": "Góc ký ức",
         "link":  "goc-ky-uc",
     },
     {

         "name": "Siêu anh hùng",
         "link":  "sieu-anh-hung",
     },
     {

         "name": "LGBTQ+",
         "link":  "lgbtq",
     },
     {

         "name": "Kinh dị",
         "link":  "kinh-di",
     },
     {

         "name": "Hoạt hình",
         "link":  "hoat-hinh",
     },
     {

         "name": "Tâm lý",
         "link":  "tam-ly",
     },
     {

         "name": "Hài hước",
         "link":  "hai-huoc",
     },
     {

         "name": "Hành động",
         "link":  "hanh-dong",
     },
     {

         "name": "TV Shows",
         "link":  "tv-shows",
     },
     {

         "name": "Bom tấn",
         "link":  "bom-tan",
     },
     {

         "name": "Phiêu lưu",
         "link":  "phieu-luu",
     },
     {

         "name": "Tiên hiệp",
         "link":  "tien-hiep",
     },
     {

         "name": "Kịch tính, hồi hộp",
         "link":  "kich-tinh-hoi-hop",
     },
     {

         "name": "Tình cảm, lãng mạn",
         "link":  "tinh-cam-lang-man",
     },
     {

         "name": "Viễn tưởng",
         "link":  "vien-tuong",
     },
     {

         "name": "Cổ trang",
         "link":  "co-trang",
     },
     {

         "name": "Thần thoại",
         "link":  "than-thoai",
     },
     {

         "name": "Anime",
         "link":  "anime",
     },
     {

         "name": "Kiếm hiệp, võ thuật",
         "link":  "kiem-hiep-vo-thuat",
     },
     {

         "name": "Hình sự",
         "link":  "hinh-su",
     },
     {

         "name": "Thảm họa",
         "link":  "tham-hoa",
     },
     {

         "name": "Gameshow",
         "link":  "gameshow",
     },
     {

         "name": "Viễn Tây",
         "link":  "vien-tay",
     },
     {

         "name": "Chiến tranh",
         "link":  "chien-tranh",
     },
     {

         "name": "Lịch sử",
         "link":  "lich-su",
     },
     {

         "name": "tài liệu",
         "link":  "tai-lieu",
     },
     {

         "name": "Âm nhạc, thể thao",
         "link":  "am-nhac-the-thao",
     },
     {

         "name": "Clip ngắn",
         "link":  "clip-ngan",
     },

];


function index(props) {
    return (

        <Navbar collapseOnSelect expand="lg" fixed='top'  variant="dark" className='header'>
                <Navbar.Brand>
                    <Link to="/">
                        
                    <img
                        src={logo}
                        height="40px"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    </Link>
                </Navbar.Brand>
            <Container >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown menuVariant="dark" title="Phim lẻ" id="phimle-dropdown" className='nav-dropdown-item' >
                                {
                                    phimle.map(
                                        (item, index) => {
                                        return <Link to={`/phim-le/${item.link}`} key={index} className="dropdown-item">{item.name}</Link>}
                                    )
                                }
                        </NavDropdown>
                        <NavDropdown menuVariant="dark" title="Phim bộ" id="phimbo-dropdown" className="nav-dropdown-item">
                            {
                                phimbo.map(
                                    (item, index) => {
                                    return <Link to={`/phim-le/${item.link}`} key={index} className="dropdown-item">{item.name}</Link>}
                                )
                            }
                        </NavDropdown>
                        <NavDropdown menuVariant="dark" title="Quốc gia" id="quociga-dropdown"className="nav-dropdown-item">
                            {
                                quocgia.map(
                                    (item, index) => {
                                    return <Link to={`/phim-le/${item.link}`} key={index} className="dropdown-item">{item.name}</Link>}
                                )
                            }
                        </NavDropdown>
                        <NavDropdown menuVariant="dark" title="Thể loại" id="theloai-dropdown"className="nav-dropdown-item">
                            { 
                                theloai.map(
                                    (item, index) => {
                                    return <Link to={`/phim-le/${item.link}`} key={index} className="dropdown-item">{item.name}</Link>}
                                )
                            }
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav className="me-auto">
                        <NavDropdown menuVariant="dark" title="Tài khoản" id="theloai-dropdown"className="nav-dropdown-item nav-item">
                            
                                <Link to={"/dang-nhap" }className="dropdown-item">Đăng nhập</Link> 
                                <Link to={"/dang-ky" }className="dropdown-item">Đăng ký</Link>  
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default index;