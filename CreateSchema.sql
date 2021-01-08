-- -----------------------------------------------------
-- Schema eleos_db
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `eleos_db` ;

-- -----------------------------------------------------
-- Schema eleos_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `eleos_db` DEFAULT CHARACTER SET utf8 ;
USE `eleos_db` ;

-- -----------------------------------------------------
-- Table `eleos_db`.`eleos_hw`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `eleos_db`.`eleos_hw` ;

CREATE TABLE `eleos_db`.`eleos_hw` (
 `meeting_id` varchar(50) NOT NULL,
 `participants` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8
