"use server";
import { revalidatePath } from "next/cache";
import prisma from "../lib/prisma";
import { AddCourseFormDatatype, AddCourseFormSchema } from "../lib/types";

export const addPesKidsCourse_SA = async (data: AddCourseFormDatatype) => {
  // Server-side validation
  const result = AddCourseFormSchema.safeParse(data);
  if (result.success) {
    // If validation successful: Add the application to the database
    await prisma.pesKidsCourse.create({ data: data });
    revalidatePath("/dashboard/pes-kids");
    return {
      success: true,
    };
  } else {
    // Otherwise, if there is an error, create an error message using the Zod errors
    let errorMessage = "Server-side error, please contact an administrator\n";
    result.error.issues.forEach((issue) => {
      errorMessage =
        errorMessage + issue.path[0] + ": " + issue.message + ". \n";
    });
    // Return it as an object
    revalidatePath("/dashboard/pes-kids");
    return {
      error: errorMessage,
    };
  }
};
