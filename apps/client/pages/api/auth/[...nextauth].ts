import NextAuth, { User, Session, SessionStrategy } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@packages/shared-prisma/prisma/prisma-client";

const prisma = new PrismaClient();

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET as string,
  adapter: PrismaAdapter(prisma),

  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // {
    //   id: 'sendgrid',
    //   type: 'email',
    //   async sendVerificationRequest({identifier: email, url}: any) {
    //             // Call the cloud Email provider API for sending emails
    //     // See https://docs.sendgrid.com/api-reference/mail-send/mail-send
    //     const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    //       // The body format will vary depending on provider, please see their documentation
    //       // for further details.
    //       body: JSON.stringify({
    //         personalizations: [{ to: [{ email }] }],
    //         from: { email: "noreply@sentimenthound.com" },
    //         subject: "Sign in to Your page",
    //         content: [
    //           {
    //             type: "text/plain",
    //             value: `Please click here to authenticate - ${url}`,
    //           },
    //         ],
    //       }),
    //       headers: {
    //         // Authentication will also vary from provider to provider, please see their docs.
    //         Authorization: `Bearer ${process.env.SENDGRID_API}`,
    //         "Content-Type": "application/json",
    //       },
    //       method: "POST",
    //     })

    //     if (!response.ok) {
    //       const { errors } = await response.json()
    //       throw new Error(JSON.stringify(errors))
    //     }

    //   }
    // }
  ],
  session: {
    strategy: "jwt" as SessionStrategy,
  },
  pages: {
    signIn: "/auth/sign-in",
    signOut: "/auth/sign-out",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
};

export default NextAuth(authOptions);
