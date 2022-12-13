import express from 'express';
import mustache from 'mustache-express';
import path from 'path';
import dotenv from 'dotenv';
import { Request, Response } from 'express';

dotenv.config()

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, '.views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '..public'))); //arquivos css

//ROTAS
server.get('/', (req: Request, res: Response)=>{
    res.send("ola mundo");
})

server.listen(process.env.PORT);