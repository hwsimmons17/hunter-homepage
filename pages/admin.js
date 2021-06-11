import Link from "next/link";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/client";

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

      {!session && (
        <>
          <h1>Not signed in</h1>
          <button onClick={signIn}>Sign In</button>
        </>
      )}
      {session && (
        <>
          <h1>Signed in as{session.user.email}</h1>
          <p>You can now access the super secret pages</p>
          <button onClick={signOut}>Sign out</button>
        </>
      )}
    </>
  );
}
