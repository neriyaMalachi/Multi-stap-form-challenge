-- CreateTable
CREATE TABLE "userSchema" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "month" BOOLEAN NOT NULL,
    "yeare" BOOLEAN NOT NULL,
    "subscriptionType" TEXT NOT NULL,
    "OnlineService" BOOLEAN NOT NULL,
    "largerStorage" BOOLEAN NOT NULL,
    "CustomizableProfile" BOOLEAN NOT NULL,
    "Price" INTEGER NOT NULL
);
