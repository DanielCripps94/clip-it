import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../../../lib/prisma";

// Define your options for NextAuth
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          throw new Error("Missing email or password");
        }

        const userCredentials = {
          email: credentials.email,
          password: credentials.password,
        };

        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/user/auth`,
            {
              method: "POST",
              body: JSON.stringify(userCredentials),
              headers: { "Content-Type": "application/json" },
            }
          );
          if (res.ok) {
            return await res.json();
          } else {
            const errorData = await res.json();
            throw new Error(errorData.message || "Invalid email or password");
          }
        } catch (error: any) {
          console.error("Authorization error:", error.message);
          throw new Error(error.message || "Authorization failed");
        }
      },
    }),
  ],

  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt", maxAge: 24 * 60 * 60 },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 60 * 60 * 24 * 30,
  },
  pages: {
    signIn: "/login",
    signOut: "/login",
    error: "/login",
  },
  callbacks: {
    // async session({ session, token }) {
    //   if (token.user) {
    //     session.user = { ...token.user };
    //   }
    //   return session;
    // },
    // async jwt({ token, user }) {
    //   if (user) {
    //     token.user = user;
    //   }
    //   return token;
    // },
  },
};

const handler = NextAuth(authOptions);

// Use the new API route handler
export { handler as GET, handler as POST };
