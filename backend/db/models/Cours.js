import JSONdb from "../db.js";
import { log } from "console";
const coursDB = new JSONdb("cours.json");

export default class Cours {
    static async findByTitre(titre) {
        return coursDB.findByTitre(titre);
    }

    static async findAll() {
        return coursDB.findAll();
    }

    static async create(userData) {
        const existingCours = await coursDB.findByTitre(userData.titre);
        if (existingCours) {
            throw new Error("Cours deja existant!");
        }

        return coursDB.insert(userData);
    }

    static async update(id, updates) {
        if (updates.titre) {
            const existingTitre = await coursDB.findByTitre(updates.titre);
            console.log(existingTitre.id);
            console.log(id);
            if (existingTitre.id != id) {
                throw new Error("Ce cours existe deja!");
            }
        }
        return coursDB.update(id, updates);
    }

    static async findById(id) {
        return coursDB.findById(id);
    }

    static async delete(id) {
        return coursDB.delete(id);
    }
}