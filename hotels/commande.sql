


--Afficher la liste des réservations en commençant par la plus récente, pour un hotel donné

SELECT reservation.*
FROM  reservation 
INNER JOIN room
ON room.id = reservation.room_id
INNER JOIN hotel
ON hotel.id = room.id_hotel
WHERE hotel.name = 'Tana'
ORDER BY start_timestamp DESC;




--Afficher la liste des receptionnistes, avec l'hotel auquel ils sont rattachés
SELECT "user".* FROM "user"
INNER JOIN role ON "user".id_role = role.id 
INNER JOIN rating ON "user".id = rating.id_user 
INNER JOIN hotel ON hotel.id = rating.id_hotel 
WHERE role.name = 'Receptioniste';


--Afficher la liste des réservations d'un client donné
SELECT * FROM reservation WHERE user_id = 1;



--Afficher le client avec le plus d'avis négatifs redigés envers les hotels.

  SELECT u.username, COUNT(*) AS negative_reviews
        FROM "user" u
        JOIN rating r ON u.id = r.id_user
        WHERE r.rate < 3
        GROUP BY u.username
        ORDER BY negative_reviews DESC
        LIMIT 1;


--Afficher la liste des promotions en cours actuellement
  SELECT *
        FROM discount
        WHERE discount_start <= CURRENT_TIMESTAMP AND discount_end >= CURRENT_TIMESTAMP;



--Afficher la liste des chambres qui seront libres demain
     SELECT r.id, rt.name
        FROM room r
        JOIN room_type rt ON r.id_room_type = rt.id
        WHERE r.id NOT IN (
            SELECT room_id
            FROM reservation
            WHERE start_timestamp <= CURRENT_DATE + INTERVAL '1 day' AND end_timestamp >= CURRENT_DATE + INTERVAL '1 day'
        );
--Afficher la liste des payements avec le nom et le prénom du réceptionniste que les a reçus
SELECT p.id, u.first_name, u.last_name
        FROM payment_method P
        JOIN "user" u ON P.receptionist_id = u.id;


