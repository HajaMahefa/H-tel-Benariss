
 INSERT INTO role VALUES (1,'Administrateur');

 INSERT INTO role VALUES (2,'Receptioniste');

 INSERT INTO role VALUES (3,'Client');

 INSERT INTO "user" VALUES (1,'Bota','1234','Herimaharavo','Hajamhefa','122 100 123 147','','033 41 123 21','bota@gmail.com','034 00 001 02','M','1995-05-03',3);

 INSERT INTO "user" VALUES (2,'Chef','12389','rakotonandrasana','Rija','122 100 123 127','','032 41 123 21','Admin@gmail.com','034 00 001 09','M','1993-05-03',1);

 INSERT INTO "user" VALUES (3,'Steph','3526','Anjatina','Stephanie','122 100 556 127','','038 41 123 21','Stephanie@gmail.com','031 00 001 09','F','1999-05-03',2);

 INSERT INTO payment_method VALUES (1,'Mobile Money');

 INSERT INTO payment_method VALUES (2,'CASH');


 INSERT INTO city VALUES (1,'Tana');

 INSERT INTO city VALUES (2,'Antsirabe');

 INSERT INTO city VALUES (3,'Fianaratsoa');

 INSERT INTO hotel VALUES (1,'Hostral','IIK 26 35','False',2);

 INSERT INTO hotel VALUES (1,'Capital','IIl 26 KI','True',1);
 INSERT INTO hotel VALUES (2,'Capital','IIl 26 KI','True',1);

 INSERT INTO hotel VALUES (3,'COLBERT','ME 26 IIK','True',3);

 INSERT INTO rating VALUES (1,5,'Nous avons passer un agrèable ce jour',3,3);

 INSERT INTO rating VALUES (2,1,'Mauvaise infrastructure',3,2);

 INSERT INTO rating VALUES (3,4,'Bon reception',3,1);

 INSERT INTO conference_room VALUES (1,15,50000.00,1);

 INSERT INTO conference_room VALUES (2,20,30000.00,2);

 INSERT INTO conference_room VALUES (3,17,35000.00,3);

 INSERT INTO discount VALUES (1,'Reduction de noêl',15,'2017-02-01','2024-02-12');

 INSERT INTO discount VALUES (2,'Promotion Saint Valentin',16,'2017-04-01','2024-02-10');

 INSERT INTO discount VALUES (3,'Reduction fin d année',17,'2020-04-01','2022-05-12');


 INSERT INTO room_type VALUES (1,'Simple place',50000.00);



 INSERT INTO room_type VALUES (1,'Simple place',50000.00);

 INSERT INTO room_type VALUES (2,'Double place',75000.00);

 INSERT INTO room_type VALUES (3,'Familiale',100000.00);

 INSERT INTO have_reduced_price VALUES (1,1,1);

 INSERT INTO have_reduced_price VALUES (2,2,2);

 INSERT INTO have_reduced_price VALUES (3,3,3);
 INSERT INTO have_reduced_price VALUES (3,2,3);

 INSERT INTO room VALUES (1,1,1);

 INSERT INTO room VALUES (2,2,2);

 INSERT INTO room VALUES (3,3,3);

 INSERT INTO room_option VALUES (1,'Jaccouzzi','Avec au chaut parfumé',20000.00);

 INSERT INTO room_option VALUES (1,'Wifi','Wifi haute débit',15000.00);
 INSERT INTO room_option VALUES (2,'Wifi','Wifi haute débit',15000.00);

 INSERT INTO room_option VALUES (3,'Vue de Mer',35000.00);

 INSERT INTO have_room_option VALUES (1,1,1);

 INSERT INTO have_room_option VALUES (2,3,1);

 INSERT INTO have_room_option VALUES (3,1,3);

 INSERT INTO have_room_option VALUES (3,2,3);
 INSERT INTO have_room_option VALUES (4,2,3);

 INSERT INTO reservation VALUES (1,'2023-07-15',3,2,1,1,'2023-07-17','2023-08-18',NULL,1,'True','True',3);

 INSERT INTO reservation VALUES (2,'2023-07-15',3,2,1,2,'2023-07-18','2023-08-19',NULL,1,'True','True',2);
 INSERT INTO reservation VALUES (3,'2023-07-15',3,2,1,2,'2023-07-19','2023-08-20',NULL,1,'True','True',1);