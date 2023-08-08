import { Router } from 'express';
import { pool } from '../config.js';

const routerUpdatUser = Router();

routerUpdatUser.put("/:id", function (req, res) {
  const userId = req.params.id;
  const {
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
  if (!username || !password || !first_name || !last_name || !cin || !society_name || !number || !email || !gender || !birthdate || !id_role) {
    res.status(400).json({ error: 'Certains paramètres obligatoires sont manquants pour la mise à jour de l\'utilisateur.' });
    return;
  }

  pool.query(
    `UPDATE "user"
    SET username = $1, password = $2, first_name = $3, last_name = $4, cin = $5, society_name = $6, number = $7, email = $8, secondary_number = $9, gender = $10, birthdate = $11, id_role = $12
    WHERE id = $13`,
    [username, password, first_name, last_name, cin, society_name, number, email, secondary_number, gender, birthdate, id_role, userId],
    (err, result) => {
      if (err) {
        console.error('Erreur lors de la mise à jour de l\'utilisateur :', err);
        res.status(500).json({ error: 'Erreur serveur lors de la mise à jour de l\'utilisateur.' });
      } else {
        res.status(200).json({ message: 'Utilisateur mis à jour avec succès.' });
      }
    }
  );
});

export default routerUpdatUser;
