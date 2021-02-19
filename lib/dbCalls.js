const prompts = require("./prompts");
const db = require("../db/database");

let p = new prompts();

db.connect();

getInput();

async function getInput() {
    let v = await p.startOptions();
    console.log(v);
    if (v.options == "View All Roles") {
        const query = db.query("SELECT * FROM role;", (err, res) => {
            if (err) throw err;
            console.log(res);
            db.end();
        });
    }
}
if (v.options == "View All Departments") {
    const query = db.query("SELECT * FROM department;", (err, res) => {
        if (err) throw err;
        console.log(res);
        db.end();
    });
}
if (v.options == "View All Employees") {
    const query = db.query("SELECT * FROM employee;", (err, res) => {
        if (err) throw err;
        console.log(res);
        db.end();
    });
}
if (v.options == "Add a Department") {
    console.log("placeholder code");
}
if (v.options == "Add a Role") {
    console.log("placeholder code");
}
if (v.options == "Add a Employee") {
    console.log("placeholder code");
}
if (v.options == "Update an Employee Role") {
    console.log("placeholder code");
}