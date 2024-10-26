"use server";

import { redirect } from "next/navigation";

export default async function Redirect(path: string) {
  redirect(path);
}
