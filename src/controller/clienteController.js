import { Router } from "express";
import { alterar, consultar, consultarporNome, deletar, inserir } from "../repository/clienteRepository.js";

const endpoints = Router();

endpoints.post('/cliente', async (req, resp) =>{
    try {
        let cliente = req.body;
        let r = await inserir( cliente );
        resp.send(r);
    } catch (error) {
        resp.status(400).send('ocorreu um erro!!')
    }
})

endpoints.put('/cliente/:id', async (req, resp) =>{
    try {
        let cliente = req.body;
        let id = req.params.id;
        let r = await alterar( id, cliente);
        resp.send(r);
    } catch (error) {
        resp.status(400).send('ocorre um ero!!!')
    }
})

endpoints.delete('/cliente/:id', async (req, resp) =>{
    try {
        let id = req.params.id;
        let r = await deletar( id );
        resp.send(  )
    } catch (error) {
        resp.status(400).send('ocorre um ero!!!')
    }
})

endpoints.get('/clientes', async (req, resp) =>{
    try {
        let r = await consultar();
        resp.send(r)
    } catch (error) {
        resp.status(400).send('ocorre um ero!!!')
    }
})

endpoints.get('/clientes/busca', async (req, resp) =>{
    try {
        let nome = req.query.n ;
        let r = await consultarporNome( nome );
        resp.send( r ); 
    } catch (error) {
        resp.status(400).send('ocorre um ero!!!')
    }
})

export default endpoints;