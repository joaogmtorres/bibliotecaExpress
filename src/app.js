import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro)=> {
    console.error("erro de conexção", erro);
})

conexao.once("open", ()=> {
    console.log("Conectado com sucesso");
    
})

const app = express();
routes(app);

// app.get("/livros", async (req, res) =>{
//     const listaLivros = await livro.find({});
//     res.status(200).json(listaLivros);
// })

// app.get("/livros/:id", (req, res)=>{
//     const index = buscaLivro(req.params.id);
//     res.status(200).json(livros[index]);
// })

// app.post("/livros", (req, res)=>{
//     livros.push(req.body);
//     res.status(201).send("Livro adicionado")
// })

// app.put("/livros/:id", (req, res)=>{
//     const index = buscaLivro(req.params.id);
//     livros[index].titulo = req.body.titulo;
//     res.status(200).json(livros)
// })

app.delete("/livros/:id", (req, res)=> {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro excluído");
});

export default app;
