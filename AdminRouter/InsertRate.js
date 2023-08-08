import { Router } from 'express';
import { pool } from '../config.js';

const routerRating = Router();

routerRating.post("/", function (req, res) {
  const { rate, comment, id_user, id_hotel } = req.body;

  if (!rate || !comment || !id_user || !id_hotel) {
    res.status(400).json({ error: 'Certains paramètres obligatoires sont manquants pour l\'insertion du commentaire et de la note.' });
    return;
  }

  pool.query(
    `INSERT INTO rating (rate, comment, id_user, id_hotel)
    VALUES ($1, $2, $3, $4)`,
    [rate, comment, id_user, id_hotel],
    (err, result) => {
      if (err) {
        console.error('Erreur lors de l\'insertion du commentaire et de la note :', err);
        res.status(500).json({ error: 'Erreur serveur lors de l\'insertion du commentaire et de la note.' });
      } else {
        res.status(201).json({ message: 'Commentaire et note insérés avec succès.' });
      }
    }
  );
});

export default routerRating;
