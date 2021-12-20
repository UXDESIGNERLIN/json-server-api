const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const cors = require('cors');
const port = process.env.PORT || 3000;

server.use(
    cors({
        origin: true,
        credentials: true,
        preflightContinue: false,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    })
);
server.options('*', cors());
server.use(router);
server.listen(port, () => {
    console.log('JSON Server is running');
});