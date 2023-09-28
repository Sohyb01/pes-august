-- CreateTable
CREATE TABLE "pesTeamMember" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "imgUrl" TEXT,
    "facebookUrl" TEXT,
    "instagramUrl" TEXT,
    "linkedinUrl" TEXT,

    CONSTRAINT "pesTeamMember_pkey" PRIMARY KEY ("id")
);
