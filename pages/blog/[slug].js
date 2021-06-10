import Head from "next/head";
import Image from "next/image";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import { Element } from "react-scroll";
import { blogData } from "../../Assets/blogData";
import styles from "../../styles/BlogPage.module.css";

export default function Home({ title, date, content, image }) {
  console.log(image);
  return (
    <>
      <Head>
        <title>Hunter Simmons | {title}</title>
        <meta
          name="description"
          content="This is a blog created by me, Hunter Simmons"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <div className={styles.wrapper}>
        <h2 className={styles.header}>{title}</h2>
        <div className={styles.date}>
          {format(parseISO(date), "MMMM do, uuu")}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <Image
            src={`/${image}`}
            width={300}
            height={300}
            objectFit="cover"
            alt={image}
            quality={70}
            priority={true}
          />
        </div>
        <div style={{ whiteSpace: "pre-wrap", marginBottom: "50px" }}>
          {content}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(ctx) {
  const { params } = ctx;
  return {
    props: blogData.find((item) => item.slug === params.slug),
  };
}

export async function getStaticPaths() {
  return {
    paths: blogData.map((item) => ({
      params: {
        slug: item.slug,
      },
    })),
    fallback: false,
  };
}
