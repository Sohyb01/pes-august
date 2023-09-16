/*
  Warnings:

  - You are about to drop the `ApplicationData` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ApplicationData";

-- CreateTable
CREATE TABLE "ParentApplicationData" (
    "applicationId" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "studentName" TEXT NOT NULL,
    "studentAge" INTEGER NOT NULL,
    "parentEmail" TEXT NOT NULL,
    "parentMobile" TEXT NOT NULL,
    "studentEmail" TEXT,
    "studentMobile" TEXT,
    "studentGender" "Gender" NOT NULL,
    "studentHasLaptop" "YesOrNo" NOT NULL,

    CONSTRAINT "ParentApplicationData_pkey" PRIMARY KEY ("applicationId")
);
