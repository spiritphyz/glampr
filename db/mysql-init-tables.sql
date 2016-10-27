-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'users'
-- 
-- ---

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `first_name` CHAR NULL DEFAULT NULL,
  `last_name` CHAR NULL DEFAULT NULL,
  `email` CHAR NULL DEFAULT NULL,
  `password` CHAR NULL DEFAULT NULL,
  `role` CHAR NULL DEFAULT NULL,
  `phone_number` VARCHAR NULL DEFAULT NULL,
  `tags` CHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'borrow'
-- 
-- ---

DROP TABLE IF EXISTS `borrow`;

CREATE TABLE `borrow` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` CHAR NULL DEFAULT NULL,
  `description` CHAR NULL DEFAULT NULL,
  `sizing` CHAR NULL DEFAULT NULL,
  `quantity` INTEGER NULL DEFAULT NULL,
  `borrow_slot` SMALLINT NULL DEFAULT NULL,
  `share_status` CHAR NULL DEFAULT NULL,
  `tags` CHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'trips'
-- 
-- ---

DROP TABLE IF EXISTS `trips`;

CREATE TABLE `trips` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `title` CHAR NULL DEFAULT NULL,
  `description` MEDIUMTEXT NULL DEFAULT NULL,
  `start_date` DATETIME NULL DEFAULT NULL,
  `end_date` DATETIME NULL DEFAULT NULL,
  `address` CHAR NULL DEFAULT NULL,
  `google_maps_url` MEDIUMTEXT NULL DEFAULT NULL,
  `cost_per_member` DECIMAL NULL DEFAULT NULL,
  `cost_deadline` DATETIME NULL DEFAULT NULL,
  `tags` CHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'borrow_users'
-- 
-- ---

DROP TABLE IF EXISTS `borrow_users`;

CREATE TABLE `borrow_users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `borrow_id` INTEGER NULL DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'terms'
-- 
-- ---

DROP TABLE IF EXISTS `terms`;

CREATE TABLE `terms` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `trip_id` INTEGER NULL DEFAULT NULL,
  `description` MEDIUMTEXT NULL DEFAULT NULL,
  `category` CHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'trips_users'
-- 
-- ---

DROP TABLE IF EXISTS `trips_users`;

CREATE TABLE `trips_users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `trip_id` INTEGER NULL DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  `invite_status` CHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'required'
-- 
-- ---

DROP TABLE IF EXISTS `required`;

CREATE TABLE `required` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `trip_id` INTEGER NULL DEFAULT NULL,
  `name` CHAR NULL DEFAULT NULL,
  `description` CHAR NULL DEFAULT NULL,
  `sizing` CHAR NULL DEFAULT NULL,
  `required` INTEGER NULL DEFAULT NULL,
  `tags` CHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'required_users'
-- 
-- ---

DROP TABLE IF EXISTS `required_users`;

CREATE TABLE `required_users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `required_id` INTEGER NULL DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  `status` CHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `borrow_users` ADD FOREIGN KEY (borrow_id) REFERENCES `borrow` (`id`);
ALTER TABLE `borrow_users` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
ALTER TABLE `terms` ADD FOREIGN KEY (trip_id) REFERENCES `trips` (`id`);
ALTER TABLE `trips_users` ADD FOREIGN KEY (trip_id) REFERENCES `trips` (`id`);
ALTER TABLE `trips_users` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
ALTER TABLE `required` ADD FOREIGN KEY (trip_id) REFERENCES `trips` (`id`);
ALTER TABLE `required_users` ADD FOREIGN KEY (required_id) REFERENCES `required` (`id`);
ALTER TABLE `required_users` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `borrow` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `trips` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `borrow_users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `terms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `trips_users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `required` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `required_users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `users` (`id`,`first_name`,`last_name`,`email`,`password`,`role`,`phone_number`,`tags`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `borrow` (`id`,`name`,`description`,`sizing`,`quantity`,`borrow_slot`,`share_status`,`tags`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `trips` (`id`,`title`,`description`,`start_date`,`end_date`,`address`,`google_maps_url`,`cost_per_member`,`cost_deadline`,`tags`) VALUES
-- ('','','','','','','','','','');
-- INSERT INTO `borrow_users` (`id`,`borrow_id`,`user_id`) VALUES
-- ('','','');
-- INSERT INTO `terms` (`id`,`trip_id`,`description`,`category`) VALUES
-- ('','','','');
-- INSERT INTO `trips_users` (`id`,`trip_id`,`user_id`,`invite_status`) VALUES
-- ('','','','');
-- INSERT INTO `required` (`id`,`trip_id`,`name`,`description`,`sizing`,`required`,`tags`) VALUES
-- ('','','','','','','');
-- INSERT INTO `required_users` (`id`,`required_id`,`user_id`,`status`) VALUES
-- ('','','','');
