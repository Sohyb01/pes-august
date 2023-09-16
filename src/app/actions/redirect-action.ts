"use server";

import { redirect } from "next/navigation";

export const redirectAction = async (path: string, revalidate?: string) => {
  redirect(path);
};
