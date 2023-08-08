import { Router } from 'express';
import { pool } from '../config.js';

const UpdatHotel = Router();

UpdatHotel.put("/:id", function (req, res) {
  const hotelId = req.params.id;
  const { name, address, is_active, id_city } = req.body;
  if (!name || !address || is_active === undefined || !id_city) {
    res.status(400).json({ error: 'Tous les paramètres sont requis pour la mise à jour de l\'hôtel.' });
    return;
  }

  pool.query(
    'UPDATE hotel SET name = $1, address = $2, is_active = $3, id_city = $4 WHERE id = $5',
    [name, address, is_active, id_city, hotelId],
    (err, result) => {
      if (err) {
        console.error('Erreur lors de la mise à jour de l\'hôtel :', err);
        res.status(500).json({ error: 'Erreur serveur lors de la mise à jour de l\'hôtel.' });
      } else {
        res.status(200).json({ message: 'Mise à jour de l\'hôtel effectuée avec succès.' });
      }
    }
  );
});

export default UpdatHotel;
