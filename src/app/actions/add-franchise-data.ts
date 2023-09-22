"use server";
import prisma from "../lib/prisma";
import { FranchiseFormSchema, FranchiseFormDatatype } from "../lib/types";

export const addFranchiseApplicationData_SA = async (
  data: FranchiseFormDatatype
) => {
  // Server-side validation
  const result = FranchiseFormSchema.safeParse(data);
  if (result.success) {
    // If validation successful: Add the application to the database
    await prisma.franchiseApplicationData.create({ data: data });
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
    return {
      error: errorMessage,
    };
  }
};
