import { Router } from 'express';
import { pool } from '../config.js';

const routerLogin = Router();

routerLogin.post("/", function (req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ error: 'Les paramètres "username" et "password" sont requis pour créer un utilisateur.' });
    return;
  }

  pool.query(
    `INSERT INTO "user" (username, password) VALUES ($1, $2)`,
    [username, password],
    (err, result) => {
      if (err) {
        console.error('Erreur lors de la création de l\'utilisateur :', err);
        res.status(500).json({ error: 'Erreur serveur lors de la création de l\'utilisateur.' });
      } else {
        res.status(201).json({ message: 'Utilisateur créé avec succès.' });
      }
    }
  );
});

export default routerLogin;
