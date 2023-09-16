"use server";

import prisma from "@/app/lib/prisma";
import {
  parentApplicationFormSchema,
  parentApplicationFormSchemaType,
} from "../lib/types";

export const addParentApplicationToDatabase = async (
  formdata: parentApplicationFormSchemaType
) => {
  // server-side validation
  const result = parentApplicationFormSchema.safeParse(formdata);
  // In case of error
  if (!result.success) {
    let errorMessage = "Please fill out all required fields \n \n";

    result.error.issues.forEach((issue) => {
      errorMessage = errorMessage + issue.message + ".\n";
    });
    return { error: errorMessage };
  }

  await prisma.parentApplicationData.create({ data: formdata });
};
