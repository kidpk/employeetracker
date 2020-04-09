INSERT INTO employees
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Carol", "Baskin", 1, 99),
    ("John", "Smith", 2, 100),
    ("Jane", "Doe", 3, NULL),
    ("Will", "Smith", 4, NULL),
    ("Tom", "Holland", 5, NULL),
    ("Joe", "Exotic", 6, NULL),
    ("Allan", "Watts", 7, NULL),
    ("Mia", "Khalifa", 8, NULL);


INSERT INTO roles
    (title, salary, department_id)
VALUES
    ("Front End Developer", 70000, 1),
    ("Back End Developer", 65000, 1),
    ("Administrative Assistant", 90000, 4),
    ("Administrative Manager", 180000, 4),
    ("Lead Front End Developer", 160000, 1),
    ("Senior Backend Developer", 120000, 2),
    ("Lead Backend Developer", 165000, 2),
    ("HR Manager", 110000, 3);


INSERT INTO department
    (name)
VALUES
    ("Front End"),
    ("Backend"),
    ("HR"),
    ("Management");


