/*
  Warnings:

  - You are about to drop the `ParentApplicationData` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `QuestionData` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StudentApplicationData` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "OnlineOrOffline" AS ENUM ('Online', 'Offline');

-- DropTable
DROP TABLE "ParentApplicationData";

-- DropTable
DROP TABLE "QuestionData";

-- DropTable
DROP TABLE "StudentApplicationData";

-- CreateTable
CREATE TABLE "PESKidsApplicationData" (
    "applicationId" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "DesiredCourse" TEXT NOT NULL,
    "ParentMobile" TEXT NOT NULL,
    "ParentEmail" TEXT NOT NULL,
    "StudentName" TEXT NOT NULL,
    "StudentAge" INTEGER NOT NULL,
    "StudentMobile" TEXT,
    "StudentEmail" TEXT,
    "DesiredMethod" "OnlineOrOffline",
    "StudentHasLaptop" BOOLEAN NOT NULL,

    CONSTRAINT "PESKidsApplicationData_pkey" PRIMARY KEY ("applicationId")
);

-- CreateTable
CREATE TABLE "PESYouthApplicationData" (
    "applicationId" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "DesiredCourse" TEXT NOT NULL,
    "StudentName" TEXT NOT NULL,
    "StudentAge" INTEGER NOT NULL,
    "StudentMobile" TEXT NOT NULL,
    "StudentEmail" TEXT NOT NULL,
    "StudentUniversity" TEXT NOT NULL,
    "StudentCollege" TEXT NOT NULL,
    "StudentSpeciality" TEXT,
    "StudentHasLaptop" BOOLEAN NOT NULL,

    CONSTRAINT "PESYouthApplicationData_pkey" PRIMARY KEY ("applicationId")
);

-- CreateTable
CREATE TABLE "SchoolPartnershipApplicationData" (
    "applicationId" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "SchoolName" TEXT NOT NULL,
    "ApplierName" TEXT NOT NULL,
    "ApplierMobile" TEXT NOT NULL,
    "ApplierEmail" TEXT NOT NULL,
    "ApplierRoleInSchool" TEXT NOT NULL,

    CONSTRAINT "SchoolPartnershipApplicationData_pkey" PRIMARY KEY ("applicationId")
);

-- CreateTable
CREATE TABLE "FranchiseApplicationData" (
    "applicationId" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ApplierName" TEXT NOT NULL,
    "ApplierMobile" TEXT NOT NULL,
    "ApplierEmail" TEXT NOT NULL,
    "ApplierLocation" TEXT NOT NULL,
    "ApplierBudget" TEXT NOT NULL,
    "DesiredFranchiseLocation" TEXT NOT NULL,
    "ApplierProfession" TEXT,
    "ApplierHeardAboutUs" TEXT,
    "ApplierMotivation" TEXT,
    "ApplierAdditionalMessage" TEXT,

    CONSTRAINT "FranchiseApplicationData_pkey" PRIMARY KEY ("applicationId")
);

-- CreateTable
CREATE TABLE "InstructorApplicationData" (
    "applicationId" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ApplierName" TEXT NOT NULL,
    "ApplierAge" INTEGER NOT NULL,
    "ApplierGender" TEXT NOT NULL,
    "ApplierMobile" TEXT NOT NULL,
    "ApplierEmail" TEXT NOT NULL,
    "ApplierExtraSocialMediaProfileLinks" TEXT NOT NULL,
    "ApplierIsGraduated" BOOLEAN NOT NULL,
    "DesiredInstructorRole" TEXT NOT NULL,

    CONSTRAINT "InstructorApplicationData_pkey" PRIMARY KEY ("applicationId")
);
