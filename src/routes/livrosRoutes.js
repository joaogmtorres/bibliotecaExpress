import express from "express";
import LivroControler from "../controlers/livroControler.js";

const routes = express.Router();

routes.get("/livros", LivroControler.listarLivros)