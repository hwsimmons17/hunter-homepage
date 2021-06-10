import { CardGroup, Card } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import styles from "../styles/Socials.module.css";

const Socials = () => {
  return (
    <div>
      <h1 className={styles.header}>Social Media Pages</h1>
      <CardGroup>
        <Card className="m-2 border">
          <a
            href="https://www.facebook.com/hunter.simmons.58118"
            style={{ margin: "auto" }}
            target="_blank"
          >
            <FaFacebook
              size={100}
              color="#4267B2"
              style={{ margin: "auto", marginTop: "5px" }}
            />
          </a>
          <Card.Body>
            <Card.Title style={{ textAlign: "Center" }}>Facebook</Card.Title>
            <Card.Text>
              I don't use Facebook often, but if you want to take a look, here
              it is.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="m-2 border">
          <a
            href="https://www.instagram.com/huntersimmons36/?hl=en"
            style={{ margin: "auto" }}
            target="_blank"
          >
            <FaInstagram
              size={100}
              color="#C13584"
              style={{ margin: "auto", marginTop: "5px" }}
            />
          </a>
          <Card.Body>
            <Card.Title style={{ textAlign: "Center" }}>Instagram</Card.Title>
            <Card.Text>
              I update my Instagram often. Instagram is my preffered way of
              keeping up with my friends and family.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="m-2 border">
          <a
            href="https://www.linkedin.com/in/hunter-simmons1/"
            style={{ margin: "auto" }}
            target="_blank"
          >
            <FaLinkedin
              size={100}
              color="#2867B2"
              style={{ margin: "auto", marginTop: "5px" }}
            />
          </a>
          <Card.Body>
            <Card.Title style={{ textAlign: "Center" }}>LinkedIn</Card.Title>
            <Card.Text>
              I love using LinkedIn to keep track of where my friends and
              collegues are working at. I do my best to keep my LinkedIn page up
              to date.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Socials;
