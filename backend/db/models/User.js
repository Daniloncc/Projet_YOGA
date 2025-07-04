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

    static async create(userData) {
        console.log(userData);

        const existingUser = await userDB.findByEmail(userData.courriel);
        if (existingUser) {
            throw new Error("Courriel existant !");
        }

        return userDB.insert(userData);
    }

    static async update(id, updates) {
        // Si on veut changer l'email, vérifier qu'il n'existe pas déjà
        if (updates.courriel) {
            const existingUser = await userDB.findByEmail(updates.courriel);
            if (existingUser.id !== id) {
                throw new Error("Ce courriel existe deja!");
            }
        }
        return userDB.update(id, updates);
    }

    static async delete(id) {
        return userDB.delete(id);
    }

    static async findById(id) {
        return userDB.findById(id);
    }
}