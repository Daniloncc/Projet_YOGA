import express from "express";
import usersRoutes from "./users.routes.js";
import coursRoutes from "./cours.routes.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.end("Bienvenue !");
});

/////////////////////// essaye telecharger une image

// router.post("/upload", (req, res) => {
//     const { image, nom } = req.body;

//     if (!image || !nom) {
//         return res.status(400).json({ error: "Image ou nom manquant" });
//     }

//     const base64Data = image.replace(/^data:image\/webp;base64,/, "");
//     const filePath = path.resolve("backend/public/images", `${nom.toLowerCase()}.webp`);

//     fs.writeFile(filePath, base64Data, "base64", (err) => {
//         if (err) {
//             console.error("Erreur d'écriture :", err);
//             return res.status(500).json({ error: "Erreur lors de la sauvegarde de l'image" });
//         }

//         res.json({ message: "Image sauvegardée", path: `/images/${nom}.webp` });
//     });
// });

//////////////////////////////////////////

router.use("/users", usersRoutes);
router.use("/cours", coursRoutes);

export default router;
