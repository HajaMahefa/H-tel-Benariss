import { Router } from 'express';
import { pool } from '../config.js';

const routerInfoUser = Router();

routerInfoUser.post("/", function (req, res) {
  const {
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
  
  if (!first_name || !last_name || !cin || !society_name || !number || !email || !gender || !birthdate || !id_role) {
    res.status(400).json({ error: 'Certains paramètres obligatoires sont manquants pour créer un utilisateur.' });
    return;
  }

  pool.query(
    `INSERT INTO "user" (first_name, last_name, cin, society_name, number, email, secondary_number, gender, birthdate, id_role)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
    [first_name, last_name, cin, society_name, number, email, secondary_number, gender, birthdate, id_role],
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

export default routerInfoUser;
