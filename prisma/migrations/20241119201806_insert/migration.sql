/*
  Warnings:

  - You are about to drop the column `draft` on the `orders` table. All the data in the column will be lost.
  - The `status` column on the `orders` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('DRAFT', 'PRODUCTION', 'COMPLETED');

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "draft",
DROP COLUMN "status",
ADD COLUMN     "status" "OrderStatus" NOT NULL DEFAULT 'DRAFT';
