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
  `role` SMALLINT NULL DEFAULT NULL,
  `phone_number` VARCHAR NULL DEFAULT NULL,
  `invite_status` SMALLINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'equips'
-- 
-- ---

DROP TABLE IF EXISTS `equips`;

CREATE TABLE `equips` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `user_id` INT NULL DEFAULT NULL,
  `name` CHAR NULL DEFAULT NULL,
  `description` CHAR NULL DEFAULT NULL,
  `sizing` CHAR NULL DEFAULT NULL,
  `quantity` INTEGER NULL DEFAULT NULL,
  `borrow_slot` SMALLINT NULL DEFAULT NULL,
  `status` SMALLINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'clothes'
-- 
-- ---

DROP TABLE IF EXISTS `clothes`;

CREATE TABLE `clothes` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  `name` CHAR NULL DEFAULT NULL,
  `description` CHAR NULL DEFAULT NULL,
  `sizing` CHAR NULL DEFAULT NULL,
  `quantity` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'food'
-- 
-- ---

DROP TABLE IF EXISTS `food`;

CREATE TABLE `food` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  `name` CHAR NULL DEFAULT NULL,
  `description` CHAR NULL DEFAULT NULL,
  `quantity` INTEGER NULL DEFAULT NULL,
  `amount` INTEGER NULL DEFAULT NULL,
  `amount_units` CHAR NULL DEFAULT NULL,
  `share_status` SMALLINT NULL DEFAULT NULL,
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
  `description` CHAR NULL DEFAULT NULL,
  `start_date` DATETIME NULL DEFAULT NULL,
  `end_date` DATETIME NULL DEFAULT NULL,
  `address` CHAR NULL DEFAULT NULL,
  `google_maps_url` CHAR NULL DEFAULT NULL,
  `cost_per_member` DECIMAL NULL DEFAULT NULL,
  `cost_deadline` DATETIME NULL DEFAULT NULL,
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
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'equips_users'
-- 
-- ---

DROP TABLE IF EXISTS `equips_users`;

CREATE TABLE `equips_users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  `equip_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `equips` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
ALTER TABLE `clothes` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
ALTER TABLE `food` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
ALTER TABLE `trips_users` ADD FOREIGN KEY (trip_id) REFERENCES `trips` (`id`);
ALTER TABLE `trips_users` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
ALTER TABLE `equips_users` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
ALTER TABLE `equips_users` ADD FOREIGN KEY (equip_id) REFERENCES `equips` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `equips` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `clothes` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `food` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `trips` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `trips_users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `equips_users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `users` (`id`,`first_name`,`last_name`,`email`,`role`,`phone_number`,`invite_status`) VALUES
-- ('','','','','','','');
-- INSERT INTO `equips` (`id`,`user_id`,`name`,`description`,`sizing`,`quantity`,`borrow_slot`,`status`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `clothes` (`id`,`user_id`,`name`,`description`,`sizing`,`quantity`) VALUES
-- ('','','','','','');
-- INSERT INTO `food` (`id`,`user_id`,`name`,`description`,`quantity`,`amount`,`amount_units`,`share_status`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `trips` (`id`,`title`,`description`,`start_date`,`end_date`,`address`,`google_maps_url`,`cost_per_member`,`cost_deadline`) VALUES
-- ('','','','','','','','','');
-- INSERT INTO `trips_users` (`id`,`trip_id`,`user_id`) VALUES
-- ('','','');
-- INSERT INTO `equips_users` (`id`,`user_id`,`equip_id`) VALUES
-- ('','','');
