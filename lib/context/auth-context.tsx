"use client";

import { SessionProvider } from "next-auth/react";

export function AuthSessionProvider({ children }: React.PropsWithChildren) {
  return <SessionProvider>{children}</SessionProvider>;
}
