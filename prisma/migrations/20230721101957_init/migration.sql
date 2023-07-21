-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "surname" TEXT,
    "organization" TEXT,
    "position" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "balance" INTEGER,
    "companyName" TEXT,
    "organizationalForms" TEXT,
    "OGRN" TEXT,
    "INN" TEXT,
    "BankBIC" TEXT,
    "CheckingAccount" TEXT,
    "Website" TEXT,
    "Telegram" TEXT,
    "Instagram" TEXT,
    "Twitter" TEXT,
    "Behance" TEXT,
    "Artstation" TEXT,
    "Authorization" TEXT,
    "twoFA" TEXT
);

-- CreateTable
CREATE TABLE "invoicePayment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "number" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "recipientId" INTEGER,
    CONSTRAINT "invoicePayment_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Operation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "recipientId" INTEGER,
    CONSTRAINT "Operation_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "recipientId" INTEGER,
    CONSTRAINT "Notification_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "authorId" INTEGER,
    CONSTRAINT "Project_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
