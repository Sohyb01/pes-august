/*
  Warnings:

  - The values [BOY,GIRL] on the enum `Gender` will be removed. If these variants are still used in the database, this will fail.
  - Changed the type of `studentHasLaptop` on the `ApplicationData` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "YesOrNo" AS ENUM ('Yes', 'No');

-- AlterEnum
BEGIN;
CREATE TYPE "Gender_new" AS ENUM ('Boy', 'Girl');
ALTER TABLE "ApplicationData" ALTER COLUMN "studentGender" TYPE "Gender_new" USING ("studentGender"::text::"Gender_new");
ALTER TYPE "Gender" RENAME TO "Gender_old";
ALTER TYPE "Gender_new" RENAME TO "Gender";
DROP TYPE "Gender_old";
COMMIT;

-- AlterTable
ALTER TABLE "ApplicationData" DROP COLUMN "studentHasLaptop",
ADD COLUMN     "studentHasLaptop" "YesOrNo" NOT NULL;
