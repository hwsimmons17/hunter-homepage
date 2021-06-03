import { Form, Button, Container } from "react-bootstrap";

import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <Container style={{ display: "flex", justifyContent: "center" }}>
      <div className={styles.wrapper}>
        <Form className={styles.form}>
          <h1 className={styles.header}>Contact Me</h1>
          <Form.Group controlId="formBasicEmail" className={styles.formDiv}>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className={styles.formDiv}>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
          <Form.Group
            controlId="exampleForm.ControlTextarea1"
            className={styles.formDiv}
          >
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Tell me what's on your mind..."
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
