import express from "express";
import {
    afficherCours,
    creerCours,
    trouverCours,
    mettreAJourCours,
    trouverTitre,
    supprimerCours
} from "../controllers/cours.controller.js";

const router = express.Router();

// Déclenchée lorsque le path /cours/ est demandé
router.get("/", afficherCours);
router.post("/", creerCours);

// GET //:id - Obtenir un cours
router.get("/:id", trouverCours);

// PUT //:id - Mettre à jour un cours
router.put("/:id", mettreAJourCours);

// DELETE //:id - Supprimer un cours
router.delete("/:id", supprimerCours);

// GET //titre/:titre - Trouver par titre
router.get("/titre/:titre", trouverTitre);

export default router;