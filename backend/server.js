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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

// // Route GET pour récupérer tous les cours depuis la base de données
// // Cette fonction est asynchrone grâce au mot-clé async.
// // Cela permet d’utiliser await à l’intérieur de la fonction.
// app.get("/cours", async (req, res) => {
//     try {
//         // await Attend que la promesse retournée par User.findAll() soit résolue (ou rejetée).
//         // Grâce à await, le serveur attend d’avoir le résultat avant de passer à la ligne suivante.
//         const cours = await Cours.findAll(); // Récupère tous les cours (SELECT * FROM cours)
//         res.json(cours); // Renvoie les cours au format JSON
//     } catch (error) {
//         res.status(500).json({ error: error.message }); // Gestion d'erreur : renvoie une erreur 500
//     }
// })

// app.get("/cours/:titre", async (req, res) => {
//     try {
//         // Récupère le paramètre "titre" depuis l’URL
//         const titre = req.params.titre;

//         // Appelle la méthode findByTitre dans ta classe Cours
//         const cours = await Cours.findByTitre(titre);

//         // Si le cours n'est pas trouvé, retourne 404
//         if (!cours) {
//             return res.status(404).json({ message: "Cours non trouvé" });
//         }

//         // Sinon, retourne le cours
//         res.json(cours);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });


// Démarrage du serveur : écoute sur le port défini et affiche un message de confirmation
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
