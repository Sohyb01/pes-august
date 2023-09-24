"use server";
import { revalidatePath } from "next/cache";
import prisma from "../lib/prisma";

export const deleteSchoolPartnershipApplicationData_SA = async (id: number) => {
  await prisma.schoolPartnershipApplicationData.delete({
    where: {
      applicationId: id,
    },
  });
  revalidatePath("/dashboard/partnerships");
};
