import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactImg from "../assets/image/contact-img.svg";
import 'animate.css';
import TrackVisibility from "react-on-screen";
export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    
    try {
      let response = await fetch('http://localhost:3000/contact', {
        method: "POST",
        headers: {
          "Content-Type": "Application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails)
      });
  
      let result = await response.json();
  
      if (response.ok) {
        setStatus({ success: true, message: "Message Sent Successfully" });
      } else {
        setStatus({ success: false, message: "Something went wrong! Please Try Again" });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus({ success: false, message: "An error occurred. Please try again later." });
    }
  
    setButtonText("Send");
    setFormDetails(formInitialDetails);
  };
  
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
            {({isVisible})=>
            
            <img className={isVisible?"animate__animated animate__zoomIn" :""} src={ContactImg} alt="Contact Us" />
            }
            </TrackVisibility>
          </Col>
          <Col md={6} size={12}>
            <TrackVisibility>
            {({isVisible})=>
            <div className={isVisible?"animate__animated animate__fadeIn":""}>
              
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit} action="https://formspree.io/f/xoqgljrk" method="POST">
              <Row>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    autoComplete="off"
                    required
                    />
                </Col>

                <Col sm={6} size={12} className="px-1">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    required
                  />
                </Col>
                <Col sm={6} size={12} className="px-1">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="off"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} size={12} className="px-1">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone no."
                    
                  />
                </Col>
                <Col size={12} className="px-1">
                  <textarea
                    rows={6}
                    name="message"
                    placeholder="Message"
                    autoComplete="off"
                    required
                  >

                  </textarea>
                  <button type="submit"><span>{buttonText}</span></button>
                </Col>
                {
                    status.message && 
                    <Col>
                    <p className={status.success===false ?"danger":"success"}>{status.message}</p>
                    </Col>
                }
              </Row>
            </form>
            </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
