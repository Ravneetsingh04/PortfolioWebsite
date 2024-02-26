import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/image/logo.svg";
import navIcon1 from "../assets/image/nav-icon1.svg";
import navIcon2 from "../assets/image/nav-icon2.png";
import navIcon3 from "../assets/image/nav-icon3.svg";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/ravneetsingh01/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="navIcon1" />
              </a>
              <a
                href="https://github.com/Ravneetsingh04"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="navIcon2" />
              </a>
              <a
                href="https://www.instagram.com/ravneet_o48/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon3} alt="navIcon3" />
              </a>
            </div>
            <p>Copyright&copy; 2024. All Rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
