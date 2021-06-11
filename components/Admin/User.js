import { Card, Button } from "react-bootstrap";
import { signIn, signOut, useSession } from "next-auth/client";

const User = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 style={{ margin: "15px", fontSize: "4em" }}>Admin Page</h1>
      <h2 style={{ margin: "20px", fontSize: "1.7em" }}>
        Thank you for logging in
      </h2>
      <Button onClick={signOut}>Sign Out</Button>
    </div>
  );
};

export default User;
