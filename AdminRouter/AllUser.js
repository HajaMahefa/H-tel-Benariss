import { Router } from 'express';
import { pool } from '../config.js';

const routerAllUser = Router();

routerAllUser.get("/", function (req, res) {
  pool.query(`SELECT * FROM "user"`, (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération des utilisateurs :', err);
      res.status(500).json({ error: 'Erreur serveur lors de la récupération des utilisateurs.' });
    } else {
      res.status(200).json(result.rows);
    }
  });
});

export default routerAllUser;
