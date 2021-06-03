import { Form, Button, Container } from "react-bootstrap";

import styles from "../styles/Contact.module.css";

const Contact = () => {
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
          <Button variant="primary" type="submit" className={styles.button}>
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Contact;
