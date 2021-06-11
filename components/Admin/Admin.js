import { Card, Button, Container } from "react-bootstrap";
import { signIn, signOut, useSession } from "next-auth/client";
import Link from "next/link";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

import { blogData } from "../../Assets/blogData";

const Admin = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 style={{ margin: "15px", fontSize: "4em" }}>Admin Page</h1>
      <h2 style={{ margin: "20px", fontSize: "1.7em" }}>Welcome Hunter</h2>
      <h2>New Blog</h2>
      <h2>Edit old blogs</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {blogData.map((item) => (
          <Card
            style={{ width: "80vw", margin: "20px", maxWidth: "600px" }}
            key={item.slug}
          >
            <Card.Body>
              <Card.Title>
                {" "}
                <Link href={`/blog/${item.slug}`}>
                  <a>{item.title}</a>
                </Link>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {format(parseISO(item.date), "MMMM do, uuu")}
              </Card.Subtitle>
              <Card.Text>{item.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      <Button onClick={signOut}>Sign Out</Button>
    </div>
  );
};

export default Admin;
