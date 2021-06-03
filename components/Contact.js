import { Form, Button, Container } from "react-bootstrap";

import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <Form className={styles.form}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">I'll send you an email</Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control type="password" placeholder="Enter name" />
            <Form.Text className="text-muted">
              I want to know who you are!
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
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
