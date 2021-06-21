import Link from "next/link";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/client";

import NotLoggedIn from "../components/Admin/NotLoggedIn";
import User from "../components/Admin/User";
import Admin from "../components/Admin/Admin";

export default function Home({ data }) {
  const [session, loading] = useSession();
  console.log(data);
  return (
    <>
      <Head>
        <title>Hunter Simmons | Admin</title>
        <meta
          name="description"
          content="This is a blog created by me, Hunter Simmons"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      {!session && <NotLoggedIn />}
      {session && session.user.email !== "hunterwilliamsimmons@gmail.com" && (
        <User />
      )}
      {session && session.user.email === "hunterwilliamsimmons@gmail.com" && (
        <Admin />
      )}
      {/* <Admin data={data} /> */}
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("http://hunterwsimmons.com/api/posts", {
    method: "GET",
  });
  const { data } = await res.json();

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
