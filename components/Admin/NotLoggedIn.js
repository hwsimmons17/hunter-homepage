import { Card, Button } from "react-bootstrap";
import { signIn, signOut, useSession } from "next-auth/client";

const NotLoggedIn = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 style={{ margin: "15px", fontSize: "4em" }}>Admin Page</h1>
      <h2 style={{ margin: "20px", fontSize: "1.7em" }}>
        This is a page for me to edit/post my blogs
      </h2>
      <Card style={{ width: "30rem", margin: "180px", marginBottom: "310px" }}>
        <Card.Body>
          <Card.Title>Login with Google</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            I hope you enjoy these photos... they are pretty fun!
          </Card.Subtitle>
          <Card.Text>
            If you are not me, you will have access to some cool pictures of me.
          </Card.Text>
          <Button onClick={signIn}>Log In</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NotLoggedIn;
