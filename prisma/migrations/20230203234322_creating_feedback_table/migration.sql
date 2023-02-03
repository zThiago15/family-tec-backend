-- CreateTable
CREATE TABLE "Feedback" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "feedback" TEXT NOT NULL,
    "starRating" INTEGER NOT NULL,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);
