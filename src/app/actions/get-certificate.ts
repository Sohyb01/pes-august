"use server";

import prisma from "@/app/lib/prisma";

export const getCertificate = async (data: string) => {
  const res = await prisma.certificate.findUnique({ where: { id: data } });
  return res;
};
