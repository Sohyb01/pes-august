-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('BOY', 'GIRL');

-- CreateTable
CREATE TABLE "ApplicationData" (
    "applicationId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "studentName" TEXT NOT NULL,
    "studentAge" TEXT NOT NULL,
    "parentEmail" TEXT NOT NULL,
    "parentMobile" TEXT NOT NULL,
    "studentEmail" TEXT,
    "studentMobile" TEXT,
    "studentGender" "Gender" NOT NULL,
    "studentHasLaptop" BOOLEAN NOT NULL,

    CONSTRAINT "ApplicationData_pkey" PRIMARY KEY ("applicationId")
);
