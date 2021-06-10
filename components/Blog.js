import { Container, Card } from "react-bootstrap";
import Link from "next/link";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

import { blogData } from "../Assets/blogData";
import styles from "../styles/Blog.module.css";

const Blog = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <h1 className={styles.header}>Blog</h1>
        <h2 className={styles.h2tag}>
          This is my personal blog where I write about things that I am working
          on and things that interest me.
        </h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {blogData.map((item) => (
            <Card style={{ width: "600px", margin: "20px" }} key={item.slug}>
              <Card.Body>
                <Card.Title>
                  {" "}
                  <Link href={`/blog/${item.slug}`}>
                    <a className={styles.title}>{item.title}</a>
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
      </div>
    </Container>
  );
};

export default Blog;
