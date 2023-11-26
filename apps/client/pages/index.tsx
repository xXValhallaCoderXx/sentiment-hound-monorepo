import Head from "next/head";

import Image from "next/image";
import styles from "@client/styles/Home.module.css";
import { useAppSelector } from "@client/shared/redux-hooks";
import { useGetTestQuery } from "@client/shared/slices/test-api";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home({ data }: any) {
  const count = useAppSelector((state) => state.test);
  const { data: testResponse, isLoading } = useGetTestQuery();
  const { data: session } = useSession()

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div
          style={{ display: "flex", flexDirection: "column", gap: 10 }}
          className={styles.center}
        >
          <h3>ServeSSr: {data?.message}</h3>
          <h3>Dynamic: {isLoading ? "LOADING" : testResponse?.length}</h3>
          {session ? <div>logged</div> : <div>not logged</div>}
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
      </main>
    </>
  );
}



export const getServerSideProps = async () => {
  console.log("PUBLIC URL: ", process.env.NEXT_PUBLIC_API_URL);
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/test`);
  const response = await res.json();
  console.log("SERVER SIDE: ", response);
  return { props: { data: response } };
};
