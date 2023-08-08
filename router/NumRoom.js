import { Router } from 'express';
import { pool } from '../config.js';

const NumAllRoom = Router();

NumAllRoom.get("/ids", function (req, res) {
  pool.query("SELECT id FROM room", (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération des IDs de chambre :', err);
      res.status(500).json({ error: 'Erreur serveur lors de la récupération des IDs de chambre.' });
    } else {
      res.status(200).json(result.rows);
    }
  });
});

export default NumAllRoom;
