// Importation des modules nécessaires
import express from "express"; // Framework pour créer un serveur web
import cors from "cors"; // Middleware pour permettre les requêtes entre domaines (Cross-Origin)
import morgan from "morgan"; // Middleware pour logger les requêtes HTTP (ici en format "short")
import routes from "./routes/index.js";

import path from "path";
import { fileURLToPath } from "url";
// Module console pour faire des logs
import { log } from "console";

// Création de l'application Express et du PORT
const app = express();
const PORT = 5858;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Middleware CORS : autorise les requêtes externes (ex: React frontend)
app.use(cors());

// Middleware Morgan : log les requêtes HTTP dans la console
app.use(morgan("short"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);



////////// eesaye dajouter une image
// app.use(express.json({ limit: "5mb" }));
// app.use("/images", express.static(path.join("backend/public/images")));
// app.use("/api", uploadRoute);


// Démarrage du serveur : écoute sur le port défini et affiche un message de confirmation
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
