import Router  from  'express';
import { pool } from '../config.js';

const routerHotel = Router();

routerHotel.get("/", function (req, res) {
    pool.query("SELECT city.name AS City, hotel.name AS Hotel FROM city JOIN hotel ON city.id = hotel.id_city", (err, result) => {
        if(err) throw err;
        res.status(200).json(result.rows)
    })
})

export default routerHotel;