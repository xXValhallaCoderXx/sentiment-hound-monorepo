import NextAuth from "next-auth/next";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";

const prisma = new PrismaClient();

export const authConfig: any = {
  adapter: PrismaAdapter(prisma) as any,
  session: {
    strategy: "jwt",
  },
  //   pages: {
  //     signIn: "/auth/sign-in",
  //     signOut: "/auth/sign-out",
  //     error: "/auth/error", // Error code passed in query string as ?error=
  //     verifyRequest: "/auth/verify",
  //   },
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

export default NextAuth(authConfig);
