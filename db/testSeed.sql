	INSERT INTO role(title,salary,department_id)
VALUES ("CEO",1000000,0),("Engineer",100000,2),("HR",50000,3);

INSERT INTO department (departmentName)
VALUES ("UPPER MANAGMENT"),("MANAGMENT"),("ENGINEERING"),("HR");

INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Scarlett","Vinal",1,NULL),("Conor","Petunia",2,1),("Teri","Christina",2,1),("Jaylee","Arthur",3,NULL);