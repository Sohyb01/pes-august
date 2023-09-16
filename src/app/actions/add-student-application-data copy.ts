"use server";

import prisma from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";
import {
  studentApplicationFormSchema,
  studentApplicationFormSchemaType,
} from "../lib/types";
import { redirect } from "next/navigation";

export const addStudentApplicationToDatabase = async (
  formdata: studentApplicationFormSchemaType
) => {
  // server-side validation
  const result = studentApplicationFormSchema.safeParse(formdata);
  // In case of error
  if (!result.success) {
    let errorMessage = "Please fill out all required fields \n \n";

    result.error.issues.forEach((issue) => {
      errorMessage = errorMessage + issue.message + ".\n";
    });
    return { error: errorMessage };
  }

  await prisma.studentApplicationData.create({ data: formdata });
};
