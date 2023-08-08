import { Router } from 'express';
import { pool } from '../config.js';

const routerConference = Router();

routerConference.get("/", function (req, res) {
  pool.query("SELECT * FROM conference_room", (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération des salles de conférence :', err);
      res.status(500).json({ error: 'Erreur serveur lors de la récupération des salles de conférence.' });
    } else {
      res.status(200).json(result.rows);
    }
  });
});

export default routerConference;
