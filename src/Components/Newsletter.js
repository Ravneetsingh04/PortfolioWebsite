import { Alert, Col, Row } from "react-bootstrap";
import { useRef, useState,useEffect } from "react";
import emailjs from '@emailjs/browser';

export const Newsletter = ({  status, message, onValidated }) => {
  const form=useRef();
  const emailInputRef=useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_e6pp2sd', 'template_b42yqsi', form.current, 
         '_fvSfJyPOUUrLkj9t'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Email Sent Successfully');
          emailInputRef.current.value='';
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send Email');
          emailInputRef.current.value='';
        }
      );
  };
  
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to our NewsLetter<br/> & Never Miss Latest Updates</h3>
           
          </Col>
          <Col md={6} xl={7}>
          <form ref={form} onSubmit={sendEmail} className="new-email-bx">
          <input type="email" ref={emailInputRef} name="user_email" placeholder="Enter your email address"/>
            <button type="submit">Join Now</button>
        </form>
        {status === 'sending' && <p>Sending...</p>}
      {status === 'error' && (
        <div dangerouslySetInnerHTML={{ __html: message }} />
      )}
      {status === 'success' && (
        <div dangerouslySetInnerHTML={{ __html: message }} />
      )}
          </Col>
        </Row>
      </div>
    </Col>
  );
};
