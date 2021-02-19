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
                            "Add department",
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
}

module.exports = inputs;