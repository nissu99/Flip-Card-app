/*
  Warnings:

  - You are about to drop the column `authorId` on the `FlashCards` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `FlashCards` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `answer` to the `FlashCards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `problem` to the `FlashCards` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `FlashCards` DROP FOREIGN KEY `FlashCards_authorId_fkey`;

-- AlterTable
ALTER TABLE `FlashCards` DROP COLUMN `authorId`,
    DROP COLUMN `content`,
    ADD COLUMN `answer` VARCHAR(191) NOT NULL,
    ADD COLUMN `problem` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `User`;
