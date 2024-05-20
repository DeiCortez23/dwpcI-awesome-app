// Importando el modulo http
import http from 'http';
// Importando Express
import express from 'express';

// Creando la instancia de express
// que basicamente es un middleware
const app = express();

// Asignando el middleware de express
// al servidor http
const server = http.createServer(app);

// Definiendo puertos
const port = 3000;
const ip = "0.0.0.0"
// Arrancando el servidor
server.listen(port, ip, () => {
  console.log(`🤖 SERvidor en http://localhost:${port}`);
});