import { autor } from "../models/autor.js";

class AutorControler {

    static async listarAutores (req, res) {
        try{
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        }catch{
            res.status(500).json({ message : `${erro.message} - falha na requisição`})
        }
    };
            

    static async cadastrarAutor (req, res) {
        try { 
            const novoAutor = await autor.create(req.body)   
            res.status(201).json({ message : "criado com sucesso", autor: novoAutor})
        } catch (erro) {
            res.status(500).json({ message : `${erro.message} - falha ao cadastrar autor`})

        }
    }

    
    static async listarAutoresPorId (req, res) {
        try{
            const id = req.params.id
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        }catch{
            res.status(500).json({ message : `${erro.message} - falha na requisição do autor`})
        }
    };

    static async atualizarAutor (req, res) {
        try{
            const id = req.params.id
            await autor.findByIdAndUpdate(id, req.body);
            res.status(201).json({ message : "atualizado com sucesso"})
        }catch{
            res.status(500).json({ message : `${erro.message} - falha na requisição da atualização do autor`})
        }
    };

    static async apagarAutor (req, res) {
        try{
            const id = req.params.id
            await autor.findByIdAndDelete(id);
            res.status(201).json({ message : "atualizado com sucesso"})
        }catch{
            res.status(500).json({ message : `${erro.message} - falha na remoção do autor`})
        }
    };
};


export default AutorControler;