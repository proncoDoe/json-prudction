
const data = require('./db');


const jsonServer = require('json-server');
const server = jsonServer.create()
const router = jsonServer.router(data)
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

server.listen(process.env.PORT || 4200);