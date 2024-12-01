import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom"

const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row>
          <Col>
            <h3 className="fw-bold">Ngoding</h3>
            <p className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et obcaecati, 
              quaerat distinctio sapiente quod itaque dignissimos aliquid ex quae adipisci!
            </p>
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+62 123 4567 8910</p>
              </Link>
            </div>
            <div className="mail">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">person-email@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col">
            <h5 className="fw-bold">menu</h5>
            <Link to="">Home</Link>
            <Link to="kelas">Kelas</Link>
            <Link to="testimonial">Testimonial</Link>
            <Link to="faq">FAQ</Link>
            <Link to="syaraketen">Syarat & Ketentuan</Link>
          </Col>
          <Col>
            <h5 className="fw-bold mb-3">Subscribe untuk info Menarik</h5>
            <div className="subscribes">
              <input type="text" placeholder="Subscribe..." />
              <button>Subscribe</button>
            </div>
            <div className="social">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent