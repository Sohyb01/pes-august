/*
  Warnings:

  - The `DesiredMethod` column on the `pesKidsApplicationData` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "instructorApplicationData" ALTER COLUMN "ApplierIsGraduated" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "pesKidsApplicationData" DROP COLUMN "DesiredMethod",
ADD COLUMN     "DesiredMethod" TEXT;

-- AlterTable
ALTER TABLE "pesYouthApplicationData" ALTER COLUMN "StudentHasLaptop" SET DATA TYPE TEXT;
