import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { prisma } from "../lib/db";
export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET as string,

  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        if (!user.email) {
          return false;
        }
        // Check if the user already exists in the database
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email },
        });

        if (!existingUser) {
          // Create a new user in the database
          await prisma.user.create({
            data: {
              email: user.email,
            },
          });
        }

        return true;
      } catch (error) {
        console.error("signIn error", error);
        return false;
      }
    },
  },
};
