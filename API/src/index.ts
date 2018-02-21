import APIServer from './Server/Server';

const gracefulShutdown = (server: APIServer) => {
    server.stop().then(() => process.exit(0));
};

var server = new APIServer();
server.start((err: any) => console.log(err));

process.on('SIGTERM', gracefulShutdown.bind(server));
process.on('SIGINT', gracefulShutdown.bind(server));