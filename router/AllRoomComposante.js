import { Router } from 'express';
import { pool } from '../config.js';

const routerRooms = Router();

routerRooms.get("/", function (req, res) {
    pool.query(`
      SELECT *
      FROM room
      FULL OUTER JOIN room_type ON room.id_room_type = room_type.id
      FULL OUTER JOIN have_room_option ON have_room_option.id_room = room.id
      FULL OUTER JOIN room_option ON room_option.id=have_room_option.id_room_option`, (err, result) => {
        if (err) throw err;
        res.status(200).json(result.rows)
    })
})

export default routerRooms;
