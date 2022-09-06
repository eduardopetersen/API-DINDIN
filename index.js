const express = require("express");
const routes = require("./routes");


const server = express(); //gerando servidor

server.use(express.json()); //avisa que vai utilizar json nas requisições
server.use(routes); 

server.listen(8000, () => console.log("rodando"));


