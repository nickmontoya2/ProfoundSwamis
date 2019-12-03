-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema car_sales
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema car_sales
-- -----------------------------------------------------
DROP DATABASE IF EXISTS `car_sales`;
CREATE SCHEMA IF NOT EXISTS `car_sales` DEFAULT CHARACTER SET utf8 ;
USE `car_sales` ;

-- -----------------------------------------------------
-- Table `car_sales`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `car_sales`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `username` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `balance` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `car_sales`.`car`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `car_sales`.`car` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `make` VARCHAR(45) NULL,
  `model` VARCHAR(45) NULL,
  `fuel` VARCHAR(45) NULL,
  `mileage` INT NULL,
  `transmission` VARCHAR(45) NULL,
  `value` INT NULL,
  `color` VARCHAR(45) NULL,
  `year` INT NULL,
  `description` VARCHAR(250) NULL,
  `ownerId` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `owner_idx` (`ownerId` ASC) VISIBLE,
  CONSTRAINT `owner`
    FOREIGN KEY (`ownerId`)
    REFERENCES `car_sales`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `car_sales`.`transaction`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `car_sales`.`transaction` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `buyerId` INT NULL,
  `sellerId` INT NULL,
  `price` INT NULL,
  `date` DATE NULL,
  `carId` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `buyerId_idx` (`buyerId` ASC) VISIBLE,
  INDEX `sellerId_idx` (`sellerId` ASC) VISIBLE,
  INDEX `carId_idx` (`carId` ASC) VISIBLE,
  CONSTRAINT `buyerId`
    FOREIGN KEY (`buyerId`)
    REFERENCES `car_sales`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `sellerId`
    FOREIGN KEY (`sellerId`)
    REFERENCES `car_sales`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `carId`
    FOREIGN KEY (`carId`)
    REFERENCES `car_sales`.`car` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


insert into user(name, username, password, balance) values ('marc', 'marc', 'password', '1000000000');
insert into user(name, username, password, balance) values ('nick', 'nick', 'password', '1000000000');
insert into user(name, username, password, balance) values ('patrick', 'patrick', 'password', '1000000000');

insert into car(make, model, fuel, mileage, transmission, value, color, year, description, ownerId) values ('Bugatti', 'Chiron', 'gasoline', 0, 'automatic', 2000000, 'chrome', 2021, 'test test test test', 1);
insert into car(make, model, fuel, mileage, transmission, value, color, year, description, ownerId) values ('Lykan', 'HyperSport', 'gasoline', 22, 'automatic', 3500000, 'Matte Black', 2020, 'Lorem Ipsum', 2);
insert into car(make, model, fuel, mileage, transmission, value, color, year, description, ownerId) values ('Oscar Mayer', 'Weinermobile', 'diesel', 99999999, 'manual', 950000, 'Orange', 1936, 'I wish I was an Oscar Mayer Weiner!!', 3);

