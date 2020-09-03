import Header from "./Header";
import Footer from "./Footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Layout({children}) {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
        <Header />
          {children}
        <Footer />
      </Col>
      </Row>
    </Container>
  )
}
