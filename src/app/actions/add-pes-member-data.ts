"use server";
import prisma from "../lib/prisma";
import { AddPESMemberFormSchema, AddPESMemberFormDatatype } from "../lib/types";

export const addPesTeamMember_SA = async (data: AddPESMemberFormDatatype) => {
  // Server-side validation
  const result = AddPESMemberFormSchema.safeParse(data);
  if (result.success) {
    // If validation successful: Add the application to the database
    await prisma.pesTeamMember.create({ data: data });
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
