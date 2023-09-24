"use server";
import { revalidatePath } from "next/cache";
import prisma from "../lib/prisma";

export const deletePesKidsCourse_SA = async (id: number) => {
  await prisma.pesKidsCourse.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/dashboard/pes-kids");
};
