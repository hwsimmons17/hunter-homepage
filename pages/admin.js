import Link from "next/link";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/client";

import NotLoggedIn from "../components/Admin/NotLoggedIn";
import User from "../components/Admin/User";
import Admin from "../components/Admin/Admin";

export default function Home() {
  const [session, loading] = useSession();

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
    </>
  );
}
