import { useState, useRef } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";

import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setShowFailure] = useState(false);
  const reRef = useRef();

  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setShowSuccess(true);
          setTimeout(function () {
            setShowSuccess(false);
          }, 2000);
        }
        if (data.error) {
          setShowFailure(true);
          setTimeout(function () {
            setShowFailure(false);
          }, 2000);
        }
      });
    Array.from(e.currentTarget.elements).forEach((field) => {
      field.value = "";
    });
  }

  return (
    <Container style={{ display: "flex", justifyContent: "center" }}>
      <div className={styles.wrapper}>
        <Form className={styles.form} onSubmit={handleOnSubmit}>
          <h1 className={styles.header}>Contact Me</h1>
          <Form.Group className={styles.formDiv}>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" name="name" />
          </Form.Group>
          <Form.Group className={styles.formDiv}>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />
          </Form.Group>
          <Form.Group className={styles.formDiv}>
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Tell me what's on your mind..."
              name="message"
            />
          </Form.Group>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            size="invisible"
            ref={reRef}
          />
          {showSuccess && (
            <Alert variant="success">Success! I will reply shortly.</Alert>
          )}
          {showFailure && <Alert variant="danger">There was an error.</Alert>}
          <Button variant="primary" type="submit" className={styles.button}>
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Contact;
