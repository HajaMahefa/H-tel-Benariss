import { Router } from 'express';
import { pool } from '../config.js';

const routerPaymentMethod = Router();

routerPaymentMethod.get("/", function (req, res) {
  pool.query("SELECT * FROM payment_method", (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération des méthodes de paiement :', err);
      res.status(500).json({ error: 'Erreur serveur lors de la récupération des méthodes de paiement.' });
    } else {
      res.status(200).json(result.rows);
    }
  });
});

export default routerPaymentMethod;
