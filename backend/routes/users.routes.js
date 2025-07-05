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


// Routes spécifiques d'abord
router.get("/courriel/:courriel", trouverCourriel);

// Routes générales ensuite
router.get("/", afficherUsers);
router.post("/", creerUser);
router.get("/:id", trouverUser);
router.put("/:id", mettreAJourUser);
router.delete("/:id", supprimerUser);

// // GET // afficher les utilisateurs
// router.get("/", afficherUsers);

// // GET // ajouter un utilisateur
// router.post("/", creerUser);

// // GET //:id - Obtenir un utilisateur par id
// router.get("/:id", trouverUser);

// // PUT //:id - Mettre à jour un utilisateur
// router.put("/:id", mettreAJourUser);

// // DELETE //:id - Supprimer un utilisateur
// router.delete("/:id", supprimerUser);

// // GET //courriel/:courriel - Trouver par courriel
// router.get("/courriel/:courriel", trouverCourriel);

export default router;