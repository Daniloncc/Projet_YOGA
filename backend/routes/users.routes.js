import express from "express";
import {
    afficherUsers,
    creerUser,
    trouverUser,
    mettreAJourUser,
    trouverCourriel,
    supprimerUser
} from "../controllers/user.controller.js";

const router = express.Router();

// GET // afficher les utilisateurs
router.get("/", afficherUsers);

// GET // ajouter un utilisateur
router.post("/", creerUser);

// GET //:id - Obtenir un utilisateur
router.get("/:id", trouverUser);

// PUT //:id - Mettre à jour un utilisateur
router.put("/:id", mettreAJourUser);

// DELETE //:id - Supprimer un utilisateur
router.delete("/:id", supprimerUser);

// GET //courriel/:courriel - Trouver par courriel
router.get("/courriel/:courriel", trouverCourriel);

export default router;