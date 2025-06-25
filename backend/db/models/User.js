import JSONdb from "../db.js";

// Crée une instance de JSONArrayDatabase en spécifiant le fichier à utiliser
const userDB = new JSONdb("users.json");

export default class User {
    // le methode appartient à la classe (et non à une instance).
    // Permet d’utiliser await à l’intérieur de la fonction.
    // Renvoie automatiquement une promesse, même sans await.
    static async findByEmail(email) {
        return userDB.findByEmail(email);
    }

    static async findAll() {
        return userDB.findAll();
    }
}