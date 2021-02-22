
INSERT INTO role(title,salary,department_id)
VALUES 
("CEO",1000000,0),
("Engineer",100000,2),
("HR",50000,3);

INSERT INTO department (departmentName)
VALUES 
("UPPER MANAGMENT"),
("MANAGMENT"),
("ENGINEERING"),
("HR");

INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES 

("Bob","Dylan",1,NULL),
("Febe","Peta",2,1),
("Tyler","Johnson",2,1),
("Jaytee","Jobe",3,NULL);