import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import { useSession } from "next-auth/react";

export default function Page() {
  return <div>adasdasd</div>;
}

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, {});

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
