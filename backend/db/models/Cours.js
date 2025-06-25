import JSONdb from "../db.js";

const userDB = new JSONdb("cours.json");

export default class Cours {
    static async findByTitre(titre) {
        return userDB.findByTitre(titre);
    }

    static async findAll() {
        return userDB.findAll();
    }
}