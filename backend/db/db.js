// Importation de modules Node.js
import fs from "fs/promises";           // Module pour lire/écrire des fichiers de manière asynchrone avec des promesses
import path from "path";               // Module pour manipuler les chemins de fichiers
import { fileURLToPath } from "url";   // Nécessaire pour obtenir le chemin du fichier courant dans un module ES
import { v7 as uuid7 } from "uuid";

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

    async save() {
        try {
            await fs.writeFile(
                this.filepath,
                JSON.stringify(this.data, null, 2),
                "utf-8"
            );
        } catch (error) {
            console.error(`Erreur de sauvegarde dans ${this.filepath}`, error);
        }
    }

    async findByEmail(courriel) {
        // Cherche dans le tableau un élément dont l’email correspond
        return this.data.find((item) => item.courriel == courriel) || null;
    }

    async findByTitre(titre) {
        // Cherche dans le tableau un élément dont le titre correspond
        return this.data.find((item) => item.titre == titre) || null;
    }

    async findAll() {
        // Retourne une copie du tableau (pour éviter toute modification directe)
        return [...this.data];
    }

    async insert(item) {
        const newItem = {
            ...item,
            id: uuid7(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
        this.data.push(newItem);
        await this.save();
        return newItem;
    }

    async update(id, updates) {
        const index = this.data.findIndex((item) => item.id == id);
        if (index !== -1) {
            this.data[index] = { ...this.data[index], ...updates };
            await this.save();
            return this.data[index];
        }
        return null;
    }

    async delete(id) {
        const index = this.data.findIndex((item) => item.id == id);
        if (index !== -1) {
            const deleted = this.data.splice(index, 1)[0];
            await this.save();
            return deleted;
        }
        return null;
    }

    async findById(id) {
        return this.data.find((item) => item.id == id) || null;
    }
}

