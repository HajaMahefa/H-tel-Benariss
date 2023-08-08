import { Router } from 'express';
import { pool } from '../config.js';

const routerUpdateRoom = Router();

routerUpdateRoom.put("/:id", function (req, res) {
  const roomId = req.params.id;
  const { description } = req.body;

  if (!description) {
    res.status(400).json({ error: 'La description est un paramètre obligatoire pour la mise à jour de la chambre.' });
    return;
  }

  pool.query(
    `UPDATE room
    SET description = $1
    WHERE id = $2`,
    [description, roomId],
    (err, result) => {
      if (err) {
        console.error('Erreur lors de la mise à jour de la chambre :', err);
        res.status(500).json({ error: 'Erreur serveur lors de la mise à jour de la chambre.' });
      } else {
        if (result.rowCount === 0) {
          res.status(404).json({ error: 'Chambre non trouvée.' });
        } else {
          res.status(200).json({ message: 'Chambre mise à jour avec succès.' });
        }
      }
    }
  );
});

export default routerUpdateRoom;
