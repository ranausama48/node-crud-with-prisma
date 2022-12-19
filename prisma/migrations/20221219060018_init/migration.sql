-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,

    UNIQUE INDEX `Users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Posts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tittle` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `authorId` INTEGER NOT NULL,

    UNIQUE INDEX `Posts_tittle_key`(`tittle`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Posts` ADD CONSTRAINT `Posts_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
