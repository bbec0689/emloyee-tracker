DROP DATABASE IF EXISTS employeesDB;

CREATE DATABASE employeesDB;

USE employeesDB;


CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    departmentName VARCHAR(50),
    PRIMARY KEY (id)
);


CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,    
    salary INT,
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES role(id)
);



