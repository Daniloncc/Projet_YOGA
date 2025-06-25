// Importation de modules Node.js
import fs from "fs/promises";           // Module pour lire/écrire des fichiers de manière asynchrone avec des promesses
import path from "path";               // Module pour manipuler les chemins de fichiers
import { fileURLToPath } from "url";   // Nécessaire pour obtenir le chemin du fichier courant dans un module ES


// Ces deux lignes servent à recréer __dirname, car il n'existe pas par défaut dans les modules ES
const __filename = fileURLToPath(import.meta.url); // Donne le chemin complet du fichier courant
const __dirname = path.dirname(__filename);        // Donne le dossier contenant ce fichier


export default class JSONdb {
    constructor(filename) {
        // Crée le chemin complet vers le fichier JSON, ex: "../data/users.json"
        this.filepath = path.join(__dirname, "../data", filename);

        // Initialise la base de données comme un tableau vide (sera peuplée ensuite)
        this.data = [];

        // Appelle la méthode pour charger les données depuis le fichier
        this.initialize();
    }


    async initialize() {
        try {
            // Lecture du fichier JSON en UTF-8
            const fileContent = await fs.readFile(this.filepath, "utf-8");

            // Convertit le texte JSON en objet JavaScript (tableau)
            this.data = JSON.parse(fileContent);
        } catch (err) {
            // En cas d’erreur (ex: fichier introuvable), elle est renvoyée
            throw err;
        }
    }

    async findByEmail(email) {
        // Cherche dans le tableau un élément dont l’email correspond
        return this.data.find((item) => item.email == email) || null;
    }

    async findByTitre(titre) {
        // Cherche dans le tableau un élément dont le titre correspond
        return this.data.find((item) => item.titre == titre) || null;
    }

    async findAll() {
        // Retourne une copie du tableau (pour éviter toute modification directe)
        return [...this.data];
    }
}

