const express = require("express");
const coursesController = require("../controller/cursos.Controller");

const routes = express.Router();

routes.get("/", coursesController.welcome);

routes.get("/lista-de-cursos", coursesController.get);

routes.post("/adicionar-cursos", coursesController.insert);

routes.delete("/deletar-cursos/:id", coursesController.delete);

module.exports = routes;