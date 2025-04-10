import express from "express";
import LivroControler from "../controlers/livroControler.js";

const routes = express.Router();

routes.get("/livros", LivroControler.listarLivros)
routes.get("/livros/:id", LivroControler.listarLivrosPorId)
routes.post("/livros", LivroControler.cadastrarLivro)
routes.put("/livros/:id", LivroControler.atualizarLivro)
routes.delete("/livros/:id", LivroControler.apagarLivro)

export default routes;