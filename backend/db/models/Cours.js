import JSONdb from "../db.js";
import { log } from "console";
const coursDB = new JSONdb("cours.json");

export default class Cours {
    static async findByTitre(cours) {
        return coursDB.findByTitre(cours);
    }

    static async findAll() {
        return coursDB.findAll();
    }

    static async create(userData) {

        const existingCours = await coursDB.findByTitre(userData.cours);
        console.log(existingCours);

        if (existingCours) {
            throw new Error("Cours deja existant!");
        }

        return coursDB.insert(userData);
    }



    static async update(id, updates) {
        if (updates.cours) {
            const existingTitre = await coursDB.findByTitre(updates.cours);

            // S'il existe un autre cours avec le même nom mais un id différent
            if (existingTitre && String(existingTitre.id) !== String(id)) {
                throw new Error("Ce cours existe déjà !");
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