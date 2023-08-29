import 'dotenv/config';

import express from 'express';
import cors from 'cors';

import clienteController from './controller/clienteController.js'

const server = express();
server.use(cors());
server.use(express.json());

server.use(clienteController);


server.listen( 5000 , () => console.log(`API subiu na porta 5000`))