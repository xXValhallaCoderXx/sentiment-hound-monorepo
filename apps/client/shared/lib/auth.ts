import { getServerSession, type NextAuthOptions } from "next-auth";
import { prisma } from "./prisma";
import { redirect } from "next/navigation";

import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";

export const authConfig: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as any,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify",
  },
  providers: [
    EmailProvider({
      server: {
        host: process.env.SMPT_HOST,
        port: Number(process.env.SMPT_PORT),
        auth: {
          user: process.env.SMPT_USER,
          pass: process.env.SMPT_PASS,
        },
      },
      from: process.env.SMPT_FROM,
    }),
    GoogleProvider({
      checks: ["none"],
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",

      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
};

export const loginIsRequiredServer = async () => {
  const session = await getServerSession(authConfig);
  if (!session) return redirect("/");
};
