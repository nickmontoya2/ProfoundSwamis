-- MYSQL WORKBENCH FORWARD ENGINEERING

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- SCHEMA CAR_SALES
-- -----------------------------------------------------

-- -----------------------------------------------------
-- SCHEMA CAR_SALES
-- -----------------------------------------------------
DROP DATABASE IF EXISTS `CAR_SALES`;
CREATE SCHEMA IF NOT EXISTS `CAR_SALES` DEFAULT CHARACTER SET UTF8 ;
USE `CAR_SALES`;

-- -----------------------------------------------------
-- TABLE `CAR_SALES`.`USER`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CAR_SALES`.`USER` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `NAME` VARCHAR(45) NULL,
  `USERNAME` VARCHAR(45) NULL,
  `PASSWORD` VARCHAR(45) NULL,
  `BALANCE` INT NULL,
  PRIMARY KEY (`ID`))
ENGINE = INNODB;


-- -----------------------------------------------------
-- TABLE `CAR_SALES`.`CAR`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CAR_SALES`.`CAR` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `MAKE` VARCHAR(45) NULL,
  `MODEL` VARCHAR(45) NULL,
  `ENGINE` VARCHAR(45) NULL,
  `FUEL` VARCHAR(45) NULL,
  `INTERIOR_COLOR` VARCHAR(45) NULL,
  `EXTERIOR_COLOR` VARCHAR(45) NULL,
  `MILEAGE` INT NULL,
  `TRANSMISSION` VARCHAR(45) NULL,
  `DRIVE_TYPE` VARCHAR(45) NULL,
  `STATUS` INT NULL,
  `VALUE` INT NULL,
  `YEAR` INT NULL,
  `DESCRIPTION` VARCHAR(250) NULL,
  `OWNERID` INT NULL,
  PRIMARY KEY (`ID`),
  INDEX `OWNER_IDX` (`OWNERID` ASC) VISIBLE,
  CONSTRAINT `OWNER`
    FOREIGN KEY (`OWNERID`)
    REFERENCES `CAR_SALES`.`USER` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = INNODB;

-- -----------------------------------------------------
-- TABLE `CAR_SALES`.`TRANSACTION`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CAR_SALES`.`TRANSACTION` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `BUYERID` INT NULL,
  `SELLERID` INT NULL,
  `PRICE` INT NULL,
  `DATE` VARCHAR(45) NULL,
  `CARID` INT NULL,
  PRIMARY KEY (`ID`),
  INDEX `BUYERID_IDX` (`BUYERID` ASC) VISIBLE,
  INDEX `SELLERID_IDX` (`SELLERID` ASC) VISIBLE,
  INDEX `CARID_IDX` (`CARID` ASC) VISIBLE,
  CONSTRAINT `BUYERID`
    FOREIGN KEY (`BUYERID`)
    REFERENCES `CAR_SALES`.`USER` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `SELLERID`
    FOREIGN KEY (`SELLERID`)
    REFERENCES `CAR_SALES`.`USER` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `CARID`
    FOREIGN KEY (`CARID`)
    REFERENCES `CAR_SALES`.`CAR` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = INNODB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


INSERT INTO USER(NAME, USERNAME, PASSWORD, BALANCE) VALUES ('MARC', 'MARC', 'PASSWORD', '1000000000');
INSERT INTO USER(NAME, USERNAME, PASSWORD, BALANCE) VALUES ('NICK', 'NICK', 'PASSWORD', '1000000000');
INSERT INTO USER(NAME, USERNAME, PASSWORD, BALANCE) VALUES ('PATRICK', 'PATRICK', 'PASSWORD', '1000000000');


INSERT INTO CAR(MAKE, MODEL, ENGINE, FUEL, DRIVE_TYPE,  MILEAGE, TRANSMISSION, VALUE, INTERIOR_COLOR, EXTERIOR_COLOR, YEAR, DESCRIPTION, STATUS, OWNERID) VALUES 
('BUGATTI', 'CHIRON', 'V20', 'GASOLINE', '4WD', 0, 'AUTOMATIC', 2000000, 'CHROME', 'CHROME', 2021, 'TEST TEST TEST TEST', 1, 1);
INSERT INTO CAR(MAKE, MODEL, ENGINE, FUEL, DRIVE_TYPE,  MILEAGE, TRANSMISSION, VALUE, INTERIOR_COLOR, EXTERIOR_COLOR, YEAR, DESCRIPTION, STATUS, OWNERID) VALUES 
('LYKAN', 'HYPERSPORT', 'V12', 'GASOLINE', '4WD', 22, 'AUTOMATIC', 3500000, 'MATTE BLACK', 'CHROME', 2020, 'LOREM IPSUM', 1, 2);
INSERT INTO CAR(MAKE, MODEL, ENGINE, FUEL, DRIVE_TYPE,  MILEAGE, TRANSMISSION, VALUE, INTERIOR_COLOR, EXTERIOR_COLOR, YEAR, DESCRIPTION, STATUS, OWNERID) VALUES 
('OSCAR MAYER', 'WEINERMOBILE', 'V2', 'DIESEL', '1WD', 99999999, 'MANUAL', 950000, 'ORANGE', 'BEIGE', 1936, 'I WISH I WAS AN OSCAR MAYER WEINER!!', 1, 3);


INSERT INTO TRANSACTION(BUYERID, SELLERID, PRICE, DATE, CARID) VALUES (1, 2, 345, '2019-12-31', 1);
INSERT INTO TRANSACTION(BUYERID, SELLERID, PRICE, DATE, CARID) VALUES (2, 1, 345, '2019-12-30', 1);
INSERT INTO TRANSACTION(BUYERID, SELLERID, PRICE, DATE, CARID) VALUES (1, 3, 345, '2019-12-29', 1);
INSERT INTO TRANSACTION(BUYERID, SELLERID, PRICE, DATE, CARID) VALUES (3, 1, 345, '2019-12-28', 1);
INSERT INTO TRANSACTION(BUYERID, SELLERID, PRICE, DATE, CARID) VALUES (2, 3, 345, '2019-12-27', 3);
INSERT INTO TRANSACTION(BUYERID, SELLERID, PRICE, DATE, CARID) VALUES (3, 2, 345, '2019-12-26', 3);
INSERT INTO TRANSACTION(BUYERID, SELLERID, PRICE, DATE, CARID) VALUES (2, 3, 345, '2019-12-27', 2);
INSERT INTO TRANSACTION(BUYERID, SELLERID, PRICE, DATE, CARID) VALUES (3, 2, 345, '2019-12-26', 2);

-- SELECT * FROM TRANSACTION;
-- SELECT * FROM USER;
-- SELECT * FROM CAR;
-- select user.id, user.name, user.balance, car.id, car.make, car.model, car.ownerid from user inner join car where user.id = car.ownerid;
-- select user.balance, car.ownerid from user inner join car where user.id = car.ownerid;
-- update user.balance, car.ownerid inner join car on user.id = car.ownerid set user.balance = 999999 where user.id = 1;
-- update car set car.ownerid = 1 where car.id = 1;
-- select user.balance, car.ownerid from user
-- inner join car on user.id = car.ownerid;

-- this is to update the sellers funds and the owner id in 1 query
-- need to update the buyers funds afterwards
-- update user
-- inner join car on user.id = car.ownerid
-- set user.balance = balance + 1, car.ownerid = 1
-- where user.id = 1;


-- SELECT * FROM TRANSACTION INNER JOIN USER ON TRANSACTION.BUYERID = USER.ID 
-- UNION
-- SELECT * FROM TRANSACTION INNER JOIN USER ON TRANSACTION.SELLERID = USER.ID;

-- DROP DATABASE car_sales;


