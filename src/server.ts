import express from 'express';
import mustache from 'mustache-express';
import path from 'path';
import dotenv from 'dotenv';
import mainRoutes from './routes/index'

dotenv.config()

const server = (module.exports = express());

server.use(express.urlencoded({extended: true}));

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '..public'))); //arquivos css


//direciona para pasta routes
server.use(mainRoutes);

server.use((req, res)=>{
    res.send("page not found")
});

server.listen(process.env.PORT);