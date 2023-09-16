-- CreateTable
CREATE TABLE "QuestionData" (
    "id" SERIAL NOT NULL,
    "mobile" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "QuestionData_pkey" PRIMARY KEY ("id")
);
