-- CreateTable
CREATE TABLE "pesKidsCourse" (
    "id" SERIAL NOT NULL,
    "courseName" TEXT NOT NULL,
    "courseDuration" TEXT NOT NULL,
    "courseImageURL" TEXT,
    "isAvailable" BOOLEAN NOT NULL,

    CONSTRAINT "pesKidsCourse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pesYouthCourse" (
    "id" SERIAL NOT NULL,
    "courseName" TEXT NOT NULL,
    "courseDuration" TEXT NOT NULL,
    "courseImageURL" TEXT,
    "isAvailable" BOOLEAN NOT NULL,

    CONSTRAINT "pesYouthCourse_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pesKidsCourse_courseName_key" ON "pesKidsCourse"("courseName");

-- CreateIndex
CREATE UNIQUE INDEX "pesYouthCourse_courseName_key" ON "pesYouthCourse"("courseName");
