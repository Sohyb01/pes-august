"use server";

import prisma from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";
import { applicationFormSchema, applicationFormSchemaType } from "../lib/types";
import { redirect } from "next/navigation";

export const addApplicationToDatabase = async (
  formdata: applicationFormSchemaType
) => {
  // server-side validation
  const result = applicationFormSchema.safeParse(formdata);
  // In case of error
  if (!result.success) {
    let errorMessage = "Please fill out all required fields \n \n";

    result.error.issues.forEach((issue) => {
      errorMessage = errorMessage + issue.message + ".\n";
    });
    return { error: errorMessage };
  }

  await prisma.applicationData.create({ data: formdata });
};
