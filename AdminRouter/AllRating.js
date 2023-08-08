import { Router } from 'express';
import { pool } from '../config.js';

const routerGetRatings = Router();

routerGetRatings.get("/", function (req, res) {
  pool.query(
    `SELECT * FROM rating`,
    (err, result) => {
      if (err) {
        console.error('Erreur lors de la récupération des évaluations :', err);
        res.status(500).json({ error: 'Erreur serveur lors de la récupération des évaluations.' });
      } else {
        res.status(200).json(result.rows);
      }
    }
  );
});

export default routerGetRatings;
