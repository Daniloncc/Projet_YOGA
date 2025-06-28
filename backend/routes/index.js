import express from "express";
import usersRoutes from "./users.routes.js";
import coursRoutes from "./cours.routes.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.end("Bienvenue !");
});

// Middleware de validation
const validateRequest = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

router.use("/users", usersRoutes);
router.use("/cours", coursRoutes);

export default router;
