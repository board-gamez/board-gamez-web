import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { verifyCode } from "./lib/services/auth.service";

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        region: { label: "Region", type: "text" },
        phone: { label: "Phone", type: "text" },
        code: { label: "Code", type: "text" },
      },
      authorize: async (credentials) => {
        try {
          const region = credentials?.region as string | undefined;
          const phone = credentials?.phone as string | undefined;
          const code = credentials?.code as string | undefined;

          if (!region || !phone || !code) {
            throw new Error("region or phone or code is undefined");
          }

          const resp = await verifyCode({
            region,
            phone,
            code,
          });

          return {
            id: resp.user._id,
            name: resp.user.name,
            token: resp.token,
            expiresIn: 100000,
          };
        } catch (error) {
          console.log((error as Error).message);
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.token = user.token;
        token.expiresIn = user.expiresIn;
      }

      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
      session.user.name = token.name as string;
      session.token = token.token;
      session.expiresIn = token.expiresIn;

      return session;
    },
  },
  logger: {
    error(code, ...message) {
      const errorCode = code as any;

      if (errorCode.type === "CredentialsSignin") {
        return;
      }

      console.error(code, ...message);
    },
  },
});
