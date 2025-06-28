import User from "../db/models/User.js"
import { log } from "console";
export const afficherUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const creerUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

};

export const trouverUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ error: "Utilisateur non trouvé" });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const mettreAJourUser = async (req, res) => {
    try {
        const user = await User.update(req.params.id, req.body);
        if (!user) return res.status(404).json({ error: "Utilisateur non trouvé" });
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const trouverCourriel = async (req, res) => {
    try {
        const user = await User.findByEmail(req.params.courriel);
        if (!user) return res.status(404).json({ error: "Utilisateur non trouvé" });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const supprimerUser = async (req, res) => {
    try {
        const deleted = await User.delete(req.params.id);
        if (!deleted)
            return res.status(404).json({ error: "Utilisateur non trouvé" });
        res.json({ message: "Utilisateur supprimé" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};