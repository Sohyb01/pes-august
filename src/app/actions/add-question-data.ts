"use server";

import prisma from "@/app/lib/prisma";

export const addFaqMessageToDatabase = async (formdata: {
  mobileNumber: string;
  message: string;
}) => {
  // server-side validation

  await prisma.questionData.create({ data: formdata });
};
