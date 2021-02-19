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