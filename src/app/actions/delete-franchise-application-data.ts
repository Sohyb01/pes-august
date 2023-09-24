"use server";
import { revalidatePath } from "next/cache";
import prisma from "../lib/prisma";

export const deleteFranchiseApplicationData_SA = async (id: number) => {
  await prisma.franchiseApplicationData.delete({
    where: {
      applicationId: id,
    },
  });
  revalidatePath("/dashboard/franchises");
};
