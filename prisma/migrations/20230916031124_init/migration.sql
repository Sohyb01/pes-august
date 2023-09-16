/*
  Warnings:

  - The primary key for the `ApplicationData` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `applicationId` column on the `ApplicationData` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "ApplicationData" DROP CONSTRAINT "ApplicationData_pkey",
DROP COLUMN "applicationId",
ADD COLUMN     "applicationId" SERIAL NOT NULL,
ADD CONSTRAINT "ApplicationData_pkey" PRIMARY KEY ("applicationId");

-- CreateTable
CREATE TABLE "StudentApplicationData" (
    "applicationId" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "studentName" TEXT NOT NULL,
    "studentUniversity" TEXT NOT NULL,
    "studentFaculty" TEXT NOT NULL,
    "studentAcademicYear" TEXT NOT NULL,
    "studentEmail" TEXT NOT NULL,
    "studentMobile" TEXT NOT NULL,
    "studentAdditionalMessage" TEXT,

    CONSTRAINT "StudentApplicationData_pkey" PRIMARY KEY ("applicationId")
);
