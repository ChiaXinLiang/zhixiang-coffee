import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcryptjs from "bcryptjs";
import NextAuth from "next-auth";
import { type JWT } from "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "./lib/zod";
import { getUserFromDb } from "./utils/db";

// Extend the JWT type to include custom fields
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ExtendedJWT extends JWT {
  userId?: string;
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        try {
          // Validate the credentials using Zod schema
          const { email, password } = signInSchema.parse(credentials);

          // Get user from database
          const user = await getUserFromDb(email);
          
          if (!user || !user.password) {
            throw new Error("Invalid email or password");
          }

          // Verify password
          const isValidPassword = await bcryptjs.compare(password, user.password);
          
          if (!isValidPassword) {
            throw new Error("Invalid email or password");
          }

          return {
            id: user.id,
            email: user.email
          };
        } catch (error) {
          console.error("Authentication error:", {
            error: error instanceof Error ? error.message : "Unknown error",
            email: credentials.email
          });
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: "/sign-in",
    error: "/sign-in"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userId = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.userId as string;
        session.user.email = token.email as string;
      }
      return session;
    }
  }
});
