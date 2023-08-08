import { Router } from 'express';
import { pool } from '../config.js';

const routerDeletConference = Router();

routerDeletConference.delete("/:id", function (req, res) {
    const roomId = req.params.id;
  
    pool.query(
      `DELETE FROM conference_room WHERE id = $1`,
      [roomId],
      (err, result) => {
        if (err) {
          console.error('Erreur lors de la suppression de la salle de conférence :', err);
          res.status(500).json({ error: 'Erreur serveur lors de la suppression de la salle de conférence.' });
        } else {
          if (result.rowCount === 0) {
            res.status(404).json({ error: 'Salle de conférence non trouvée.' });
          } else {
            res.status(200).json({ message: 'Salle de conférence supprimée avec succès.' });
          }
        }
      }
    );
  });

export default routerDeletConference;
