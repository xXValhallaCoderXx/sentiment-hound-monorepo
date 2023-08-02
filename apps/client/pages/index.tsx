import Image from "next/image";
import { Inter } from "next/font/google";
import { useUser } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { user, error, isLoading } = useUser();
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <a href="/api/auth/login">Login</a>
      {user && (
        <div>
          {/* <Image
            height={100}
            width={100}
            src={user.picture ?? ""}
            alt={user.name ?? ""}
          /> */}
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
    </main>
  );
}
