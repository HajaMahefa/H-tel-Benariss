import  express  from 'express';
import cors from "cors"
import routeAdd from './router/Adesion.js';
import routerHotel from './router/SellectRoomHotel.js';
import SelectRoom from './router/AfficheRoomHotel.js';
import routerRooms from './router/AllRoomComposante.js';
import UpdatHotel from './router/UpdatHotel.js';
import GetHotelRoom from './router/getHotelRoom.js';
import routerConference from './router/SalleConference.js';
import NumAllRoom from './router/NumRoom.js';
import CheqReservation from './router/CheqReservation.js';
import routerPaymentMethod from './router/PaymentMethode.js';
import routerAllUser from './AdminRouter/AllUser.js';
import routerLogin from './AdminRouter/Login.js';
import routerInfoUser from './router/InsertInformation.js';
import routerIsertReceptioniste from './AdminRouter/InsertReceptioniste.js';
import routerDeletUser from './AdminRouter/DeleteUser.js';
import routerUpdatUser from './AdminRouter/UpdateUser.js';
import routerDeletConference from './AdminRouter/DeleteSlleConference.js';
import routerUpdateConference from './AdminRouter/UpdateSalle.js';
import routerRating from './AdminRouter/InsertRate.js';
import routerGetRatings from './AdminRouter/AllRating.js';
import routerDeleteRoom from './AdminRouter/DeletRoom.js';
import routerUpdateRoom from './AdminRouter/UpdatRoom.js';

const app = express()
const port = 5000

app.use(cors());
app.use(express.json());

//route pour une nouvelle user
app.use("/add", routeAdd);

//affice tout les city et les hotel dans change city
app.use("/Hotel", routerHotel);

//affiche une chambre demander par le client a traver son id 'numero de chambre' // tout les numero de chambre
app.use("/Room", SelectRoom);     app.get("/NumRoom", NumAllRoom);

//tout les chambre ainsi que ses composante
app.use("/AllRoom", routerRooms);

//mise a jour d'un hotel
app.use("/UpdatHotel", UpdatHotel);

//affiche un cambre donner par le client qui contient l'image,prix,description, nom hotel,adress,type de chambre
app.use("/GetHotelRoom", GetHotelRoom);

//arffiche le conference_room
app.use("/SalleConference", routerConference);

//passer un reservation
app.use("/Reserver", CheqReservation);

//Payment method
app.use("/MethodPayment", routerPaymentMethod);

// registre information
app.use("/Registre", routerInfoUser);


//Login
app.use("/Login", routerLogin);

//select Rating
app.use("/AllRating", routerRating);

//-----------------------------------------requete pour l'admin--------------------------------------------------//

//Tout les user avec ses information
app.use("/AllUser", routerAllUser);


//suprimer un user
app.use("/DeletUser", routerDeletUser);

//Update user
app.use("/UpdatUser", routerUpdatUser);

//insert de nouvel receptioniste
app.use("/NouvelReceptioniste", routerIsertReceptioniste);

//supression d'un salle de 
app.use("/DeleteSalle", routerDeletConference);

//update salle de Conference
app.use("/UpdateSalle", routerUpdateConference);


//Update room
app.use("/UpdatRoom", routerUpdateRoom);

//Delete room
app.use("/DeleteRoom", routerDeleteRoom);

//get Rating
app.use("/GetRating", routerGetRatings);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})