require("dotenv").config();

const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogames = require("./videogames");
const createvideogame = require("./createvideogame");
const genres = require("./genres");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/videogame", createvideogame);
router.use("/videogames", videogames);
router.use("/genres", genres);

module.exports = router;
