"use server";

import prisma from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addFaqMessageToDatabase = async (formdata: {
  mobileNumber: string;
  message: string;
}) => {
  // server-side validation

  await prisma.questionData.create({ data: formdata });
};
