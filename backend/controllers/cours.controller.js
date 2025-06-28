import Cours from "../db/models/Cours.js"

export const afficherCours = async (req, res) => {
    try {
        const cours = await Cours.findAll();
        res.json(cours);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const creerCours = async (req, res) => {
    try {
        const newCours = await Cours.create(req.body);
        res.status(201).json(newCours);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const trouverCours = async (req, res) => {
    try {
        const cours = await Cours.findById(req.params.id);
        if (!cours) return res.status(404).json({ error: "Cours non trouvé" });
        res.json(cours);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const mettreAJourCours = async (req, res) => {
    try {
        const cours = await Cours.update(req.params.id, req.body);
        if (!cours) return res.status(404).json({ error: "Cours non trouvé" });
        res.json(cours);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const trouverTitre = async (req, res) => {
    try {
        const cours = await Cours.findByTitre(req.params.titre);
        if (!cours) return res.status(404).json({ error: "Cours non trouvé" });
        res.json(cours);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const supprimerCours = async (req, res) => {
    try {
        const deleted = await Cours.delete(req.params.id);
        if (!deleted)
            return res.status(404).json({ error: "Utilisateur non trouvé" });
        res.json({ message: "Utilisateur supprimé" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};