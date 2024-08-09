const net = require('net');

const HOST = 'localhost';
const PORT = 5000;

const server = net.createServer((socket) => {
    console.log(`Conexão aceita no endereço ${socket.remoteAddress}:${socket.remotePort}`);

    socket.on('data', (data) => {
        console.log(`Mensagem recebida: ${data}`);
        socket.write('Mensagem recebida!');
    });

    socket.on('close', () => {
        console.log('Conexão encerrada');
    });
});

server.listen(PORT, HOST, () => {
    console.log(`Servidor rodando em ${HOST}:${PORT}`);
});
