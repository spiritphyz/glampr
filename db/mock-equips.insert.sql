INSERT INTO `equips` (`id`, `user_id`, `trip_id`, `name`, `description`, `sizing`, `quantity`, `borrow_slot`, `tags`, `status`)
VALUES
	(1, 3, 1, 'tent', 'single person tent', NULL, 1, -1, NULL, 1),
	(2, 8, 1, 'sleeping bag', '', NULL, 1, -1, NULL, 1),
	(3, 8, 1, 'green sleeping bag', NULL, 'M', 1, -1, NULL, NULL),
	(4, NULL, 1, 'green sleeping bag', NULL, 'M', 1, 1, NULL, NULL),
	(5, 1, 1, 'hiking shoes', NULL, NULL, NULL, NULL, 'required', 1),
	(6, 3, 1, 'hiking shoes', NULL, NULL, NULL, NULL, 'required', 2),
	(7, 8, 1, 'hiking shoes', NULL, NULL, NULL, NULL, 'required', 1),
	(8, 1, 1, 'skillet', NULL, 'S', NULL, NULL, NULL, 1),
	(9, 1, 1, 'frame pack', NULL, NULL, NULL, -1, NULL, NULL),
	(10, NULL, 1, 'frame pack', NULL, NULL, NULL, 1, NULL, NULL),
	(11, 8, 1, 'shade hat', 'can be rolled up in backpack', 'S', NULL, -1, NULL, NULL),
	(12, NULL, 1, 'shade hat', 'can be rolled up in backpack', NULL, NULL, 1, NULL, NULL),
	(13, 3, 1, '3-person tent', NULL, NULL, NULL, -1, NULL, NULL),
	(14, NULL, 1, '3-person tent', NULL, NULL, NULL, 1, NULL, NULL),
	(15, NULL, 1, '3-person tent', NULL, NULL, NULL, 2, NULL, NULL),
	(16, NULL, 1, '3-person tent', NULL, NULL, NULL, 3, NULL, NULL);
