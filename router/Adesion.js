import Router  from  'express';
import { pool } from '../config.js';
const routeAdd = Router();

routeAdd.post("/", function (req, res) {
    const {user_name, user_email, user_password} = req.body;
    pool.query("INSERT INTO userss (user_name, user_email, user_password) VALUES (\$1, \$2, \$3)", [user_name, user_email, user_password], (err, result) => {
        if(err) throw err;
        res.status(200).json({message: "User added successfully"});
    })
})
export default routeAdd;