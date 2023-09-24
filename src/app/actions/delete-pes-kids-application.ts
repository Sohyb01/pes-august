"use server";
import { revalidatePath } from "next/cache";
import prisma from "../lib/prisma";

export const deletePesKidsApplicationData_SA = async (id: number) => {
  await prisma.pesKidsApplicationData.delete({
    where: {
      applicationId: id,
    },
  });
  revalidatePath("/dashboard/pes-kids");
};
