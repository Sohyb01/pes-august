/*
  Warnings:

  - You are about to drop the `FranchiseApplicationData` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `InstructorApplicationData` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PESKidsApplicationData` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PESYouthApplicationData` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SchoolPartnershipApplicationData` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "FranchiseApplicationData";

-- DropTable
DROP TABLE "InstructorApplicationData";

-- DropTable
DROP TABLE "PESKidsApplicationData";

-- DropTable
DROP TABLE "PESYouthApplicationData";

-- DropTable
DROP TABLE "SchoolPartnershipApplicationData";

-- CreateTable
CREATE TABLE "pesKidsApplicationData" (
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

    CONSTRAINT "pesKidsApplicationData_pkey" PRIMARY KEY ("applicationId")
);

-- CreateTable
CREATE TABLE "pesYouthApplicationData" (
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

    CONSTRAINT "pesYouthApplicationData_pkey" PRIMARY KEY ("applicationId")
);

-- CreateTable
CREATE TABLE "schoolPartnershipApplicationData" (
    "applicationId" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "SchoolName" TEXT NOT NULL,
    "ApplierName" TEXT NOT NULL,
    "ApplierMobile" TEXT NOT NULL,
    "ApplierEmail" TEXT NOT NULL,
    "ApplierRoleInSchool" TEXT NOT NULL,

    CONSTRAINT "schoolPartnershipApplicationData_pkey" PRIMARY KEY ("applicationId")
);

-- CreateTable
CREATE TABLE "franchiseApplicationData" (
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

    CONSTRAINT "franchiseApplicationData_pkey" PRIMARY KEY ("applicationId")
);

-- CreateTable
CREATE TABLE "instructorApplicationData" (
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

    CONSTRAINT "instructorApplicationData_pkey" PRIMARY KEY ("applicationId")
);
