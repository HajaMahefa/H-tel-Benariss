import { Router } from 'express';
import { pool } from '../config.js';

const routerUpdateConference = Router();

routerUpdateConference.put("/:id", function (req, res) {
    const roomId = req.params.id;
    const { capacity, price_per_hour } = req.body;
  
    if (!capacity || !price_per_hour) {
      res.status(400).json({ error: 'Certains paramètres obligatoires sont manquants pour la mise à jour de la salle de conférence.' });
      return;
    }
  
    pool.query(
      `UPDATE conference_room
      SET capacity = $1, price_per_hour = $2
      WHERE id = $3`,
      [capacity, price_per_hour, roomId],
      (err, result) => {
        if (err) {
          console.error('Erreur lors de la mise à jour de la salle de conférence :', err);
          res.status(500).json({ error: 'Erreur serveur lors de la mise à jour de la salle de conférence.' });
        } else {
          if (result.rowCount === 0) {
            res.status(404).json({ error: 'Salle de conférence non trouvée.' });
          } else {
            res.status(200).json({ message: 'Salle de conférence mise à jour avec succès.' });
          }
        }
      }
    );
  });

export default routerUpdateConference;
