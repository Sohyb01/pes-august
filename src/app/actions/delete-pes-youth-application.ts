"use server";
import { revalidatePath } from "next/cache";
import prisma from "../lib/prisma";

export const deletePesYouthApplicationData_SA = async (id: number) => {
  await prisma.pesYouthApplicationData.delete({
    where: {
      applicationId: id,
    },
  });
  revalidatePath("/dashboard/pes-youth");
};
