import Router  from  'express';
import { pool } from '../config.js';

const SelectRoom = Router();

SelectRoom.get("/:id", async function (req, res) {
  const roomId = req.params.id;
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM room WHERE id = $1', [roomId]);
    const room = result.rows[0];
    client.release();
    res.json(room);
  } catch (err) {
    console.error('Erreur lors de la récupération de la chambre :', err);
    res.status(500).send('Erreur serveur');
  }
});
export default SelectRoom;
