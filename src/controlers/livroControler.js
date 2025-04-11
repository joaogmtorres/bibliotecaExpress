import { autor } from "../models/autor.js";
import livro from "../models/livro.js";

class LivroControler {

    static async listarLivros (req, res) {
        try{
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        }catch{
            res.status(500).json({ message : `${erro.message} - falha na requisição`})
        }
    };
            
    static async cadastrarLivro (req, res) {
        const novoLivro = req.body;   
        try { 
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc}}
            const livroCriado = await livro.create(livroCompleto)
            res.status(201).json({ message : "criado com sucesso", livro: novoLivro})
        } catch (erro) {
            res.status(500).json({ message : `${erro.message} - falha ao cadastrar livro`})

        }
    }

    static async listarLivrosPorId (req, res) {
        try{
            const id = req.params.id
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        }catch{
            res.status(500).json({ message : `${erro.message} - falha na requisição do livro`})
        }
    };

    static async atualizarLivro (req, res) {
        try{
            const id = req.params.id
            await livro.findByIdAndUpdate(id, req.body);
            res.status(201).json({ message : "atualizado com sucesso"})
        }catch{
            res.status(500).json({ message : `${erro.message} - falha na requisição da atualização do livro`})
        }
    };

    static async apagarLivro (req, res) {
        try{
            const id = req.params.id
            await livro.findByIdAndDelete(id);
            res.status(201).json({ message : "atualizado com sucesso"})
        }catch{
            res.status(500).json({ message : `${erro.message} - falha na remoção do livro`})
        }
    };
    
    static async listarLivrosPorEditora (req, res) {
        const editora = req.query.editora;
        try{
            const livroPorEditora = await livro.find({editora:editora})
            res.status(200).json(livroPorEditora);
        }catch (erro){
            res.status(500).json({ message : `${erro.message} - falha na requisição da atualização do livro`})

        }
    }
};


export default LivroControler;