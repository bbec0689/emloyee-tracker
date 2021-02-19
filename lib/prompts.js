const inquirer = require("inquirer");

class inputs {
    constructor() { }

    async startOptions() {
        return new Promise((resolve, reject) => {
            inquirer
                .prompt([
                    {
                        type: "list",
                        name: "options",
                        message: "Select an option:",
                        choices: [
                            "View Departments",
                            "View Roles",
                            "View Employees",
                            "Add Department",
                            "Add Role",
                            "Add Employee",
                            "Update Employee Role",
                            "Exit",
                        ],
                    },
                ])
                .then((answers) => {
                    //console.log(JSON.stringify(answers));
                    resolve(answers);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

async newDepartmentPrompts(){
    return new Promise((resolve, reject) => {
        inquirer.prompt([{
            type: "input",
            name: "department",
            message: "Enter Department you want to add"
        }]).then((answers) => {
            if (answers) {
                resolve(answers)
            } else {
                return null;
            }

        })
    });
}
}


module.exports = inputs;