"use server";

import prisma from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";

interface certificateData {
  id: string;
  studentName: string;
  imgUrl: string;
}

export const addCertificateToDatabase = async (data: certificateData) => {
  await prisma.certificate.create({ data: data });
  revalidatePath("/dashboard");
};
