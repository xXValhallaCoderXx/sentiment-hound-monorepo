import NextAuth, { User, Session, SessionStrategy  } from "next-auth";
import { JWT } from "next-auth/jwt";
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
  ],
  session: {
    strategy: 'jwt' as SessionStrategy,
   },
};

export default NextAuth(authOptions);
