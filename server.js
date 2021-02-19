const prompts = require("./lib/prompts");
require("dotenv").config();

let p = new prompts();
const mysql = require("mysql2");
require("dotenv").config({ path: "../.env" });

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,
    // Your MySQL username
    user: process.env.DB_USER,
    // Your MySQL password
    password: process.env.DB_PASS,
    database: "employeesdb",
});

connection.connect((err) => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
});

getInput();

async function getInput() {
    let givenOption = await p.startOptions();
    console.log(givenOption);
    if (givenOption.options == "View All Roles") {
        const query = connection.query("SELECT * FROM role;", (err, res) => {
            if (err) throw err;
            console.log(res);
            connection.end();
        });
    }
    if (givenOption.options == "View All Departments") {
        const query = connection.query("SELECT * FROM department;", (err, res) => {
            if (err) throw err;
            console.log(res);
            connection.end();
        });
    }
    if (givenOption.options == "View All Employees") {
        const query = connection.query("SELECT * FROM employee;", (err, res) => {
            if (err) throw err;
            console.log(res);
            connection.end();
        });
    }
    if (givenOption.options == "Add a Department") {
        console.log("placeholder code");
    }
    if (givenOption.options == "Add a Role") {
        console.log("placeholder code");
    }
    if (givenOption.options == "Add a Employee") {
        console.log("placeholder code");
    }
    if (givenOption.options == "Update an Employee Role") {
        console.log("placeholder code");
    }
}