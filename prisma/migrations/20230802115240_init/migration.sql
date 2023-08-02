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
    "company_name" TEXT,
    "organizational_forms" TEXT,
    "ogrn" TEXT,
    "inn" TEXT,
    "bank_bic" TEXT,
    "checking_account" TEXT,
    "website" TEXT,
    "telegram" TEXT,
    "instagram" TEXT,
    "twitter" TEXT,
    "behance" INTEGER NOT NULL DEFAULT 0,
    "artstation" TEXT,
    "authorization" TEXT,
    "two_fa" TEXT
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT,
    "date" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "type" TEXT,
    "status" TEXT NOT NULL,
    "recipient_id" INTEGER,
    CONSTRAINT "Notification_recipient_id_fkey" FOREIGN KEY ("recipient_id") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT,
    "class" TEXT,
    "name" TEXT,
    "address" TEXT,
    "info" TEXT,
    "images" TEXT,
    "files" TEXT,
    "city" TEXT,
    "links" TEXT,
    "status" TEXT DEFAULT 'add_information',
    "comments" TEXT,
    "likes" INTEGER,
    "author_id" INTEGER,
    CONSTRAINT "Project_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Backgrounds" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "path" TEXT NOT NULL,
    "author_id" INTEGER,
    "project_id" INTEGER,
    CONSTRAINT "Backgrounds_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Backgrounds_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "personal_assistant" TEXT NOT NULL,
    "technical_requirements" TEXT NOT NULL,
    "placement_rules" TEXT NOT NULL,
    "integration" TEXT NOT NULL,
    "author_id" INTEGER,
    "project_id" INTEGER,
    CONSTRAINT "Order_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Order_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Backgrounds_project_id_key" ON "Backgrounds"("project_id");

-- CreateIndex
CREATE UNIQUE INDEX "Order_project_id_key" ON "Order"("project_id");
