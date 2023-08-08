// routerUser.js

import { Router } from 'express';
import { pool } from '../config.js';

const routerDeletUser = Router();

routerDeletUser.delete("/:id", function (req, res) {
  const userId = req.params.id;

  pool.query(
    `DELETE FROM "user" WHERE id = $1`,
    [userId],
    (err, result) => {
      if (err) {
        console.error('Erreur lors de la suppression de l\'utilisateur :', err);
        res.status(500).json({ error: 'Erreur serveur lors de la suppression de l\'utilisateur.' });
      } else {
        res.status(200).json({ message: 'Utilisateur supprimé avec succès.' });
      }
    }
  );
});

export default routerDeletUser;
