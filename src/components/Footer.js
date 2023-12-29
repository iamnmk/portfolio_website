import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../Assets/img/nav-icon1.svg'
import navIcon2 from '../Assets/img/hashnode.svg'
import navIcon3 from '../Assets/img/icons8-github.svg'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
            <Col size={12} sm={6}>
           
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href = 'https://github.com/iamnmk'><img src={navIcon1} alt="" /></a>
                <a href = 'https://nmk.hashnode.dev/'><img src={navIcon2} alt="" /></a>
                <a href = 'https://github.com/iamnmk'><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}