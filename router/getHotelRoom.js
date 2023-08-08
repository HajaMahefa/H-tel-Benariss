// routerRoom.js

import { Router } from 'express';
import { pool } from '../config.js';

const GetHotelRoom = Router();

GetHotelRoom.get("/:id", function (req, res) {
  const roomId = req.params.id;
  
  pool.query(
    `SELECT room.id AS room_id, room.description, room_type.name AS room_type_name,
    room_type.base_price, room_type.image, hotel.name AS hotel_name, hotel.address
    FROM room
    JOIN room_type ON room.id_room_type = room_type.id
    JOIN hotel ON room.id_hotel = hotel.id
    WHERE room.id = $1`,
    [roomId],
    (err, result) => {
      if (err) {
        console.error('Erreur lors de la récupération de la chambre :', err);
        res.status(500).json({ error: 'Erreur serveur lors de la récupération de la chambre.' });
      } else {
        if (result.rows.length > 0) {
          res.status(200).json(result.rows[0]);
        } else {
          res.status(404).json({ error: 'Chambre non trouvée.' });
        }
      }
    }
  );
});

export default GetHotelRoom;
