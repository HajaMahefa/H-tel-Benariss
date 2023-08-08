import { Router } from 'express';
import { pool } from '../config.js';

const CheqReservation = Router();

CheqReservation.post("/", function (req, res) {
  const { start, end_date } = req.body;
  if (!start || !end_date) {
    res.status(400).json({ error: 'Les paramètres "start" et "end_date" sont requis pour créer une réservation.' });
    return;
  }

  pool.query(
    `INSERT INTO reservation (start, end_date)
    VALUES ($1, $2)`,
    [start, end_date],
    (err, result) => {
      if (err) {
        console.error('Erreur lors de la création de la réservation :', err);
        res.status(500).json({ error: 'Erreur serveur lors de la création de la réservation.' });
      } else {
        res.status(201).json({ message: 'Réservation créée avec succès.' });
      }
    }
  );
});

export default CheqReservation;
