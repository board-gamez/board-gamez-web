import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
    };
    token: string;
    expiresIn: number;
  }

  interface User {
    id: string;
    name: string;
    token: string;
    expiresIn: number;
  }
}

import "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: string;
      mobile?: string;
      name?: string;
    };
    token: string;
    refreshToken: string;
    expiresIn: number;
    error?: "RefreshAccessTokenError";
  }
}
