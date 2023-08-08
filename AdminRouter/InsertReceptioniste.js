// routerUser.js

import { Router } from 'express';
import { pool } from '../config.js';

const routerIsertReceptioniste = Router();

routerIsertReceptioniste.post("/", function (req, res) {
  const {
    id,
    username,
    password,
    first_name,
    last_name,
    cin,
    society_name,
    number,
    email,
    secondary_number,
    gender,
    birthdate,
    id_role
  } = req.body;
  
  // Vérifier que les paramètres nécessaires sont fournis
  if (!id || !username || !password || !first_name || !last_name || !cin || !society_name || !number || !email || !gender || !birthdate || !id_role) {
    res.status(400).json({ error: 'Certains paramètres obligatoires sont manquants pour créer un utilisateur.' });
    return;
  }

  pool.query(
    `INSERT INTO "user" (id, username, password, first_name, last_name, cin, society_name, number, email, secondary_number, gender, birthdate, id_role)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,
    [id, username, password, first_name, last_name, cin, society_name, number, email, secondary_number, gender, birthdate, id_role],
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

export default routerIsertReceptioniste;
