import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import prisma from "@/app/lib/prisma";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials) {
        // console.log(credentials);
        if (!credentials?.email || !credentials.password) {
          return null;
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        // console.log(user);
        if (!user) return null;

        if (user.password == credentials.password) {
          //   console.log("login successful");
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  //   pages: {
  //     signIn: "/SigninPage",
  //   },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },
    // If you want to use the role in client components:
    async session({ session, token }) {
      if (session?.user) {
        // session.user.name = token.name
        session.user.email = token.email;
        session.user.role = token.role;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      return "/";
    },
  },
};
