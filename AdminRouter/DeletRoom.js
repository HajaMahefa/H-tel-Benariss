import { Router } from 'express';
import { pool } from '../config.js';

const routerDeleteRoom = Router();

routerDeleteRoom.delete("/:id", function (req, res) {
  const roomId = req.params.id;

  pool.query(
    `DELETE FROM room
    WHERE id = $1`,
    [roomId],
    (err, result) => {
      if (err) {
        console.error('Erreur lors de la suppression de la chambre :', err);
        res.status(500).json({ error: 'Erreur serveur lors de la suppression de la chambre.' });
      } else {
        if (result.rowCount === 0) {
          res.status(404).json({ error: 'Chambre non trouvée.' });
        } else {
          res.status(200).json({ message: 'Chambre supprimée avec succès.' });
        }
      }
    }
  );
});

export default routerDeleteRoom;
