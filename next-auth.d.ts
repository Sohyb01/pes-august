// import { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      email: string;
      password: string;
      role: string;
    };
  }

  interface User {
    id?: string;
    email: string;
    password: string;
    role: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    email: string;
    password: string;
    role: string;
  }
}
