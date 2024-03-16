const express = require('express');
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
const app = express();
dotenv.config({ path: './config.env' })
const port = process.env.PORT;
const model = require('./models');
const { Server } = require("socket.io");
const { handleSendMessage, handleJoinRoom, handleLeaveRoom, handleDisconnect, handleConnection } = require("./Custom-event-handler.jsx");

app.use(express.json());
app.use(require(`./router/auth`));



// const middleware = (req, res, next) => {
//     console.log(`hello my middleware`);
//     next();
// }
const server = app.listen(port, (req, res) => {
    console.log(`your local host is at ${port}`);
});

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

io.on('connection', (socket) => {
    handleConnection(socket);

    socket.on('join-room', (data) => {
        handleJoinRoom(socket, data);
    });

    socket.on('leave-room', () => {
        handleLeaveRoom(socket);
    });

    socket.on('send-message', (data) => {
        handleSendMessage(io, data, socket.id);
    });

    socket.on('disconnect', () => {
        handleDisconnect(socket);
    });
});
app.get('/', (req, res) => {
    res.send(`hello it is too amazing`);
});
// app.get('/about', middleware, (req, res) => {
//     res.send(`hello it is too about`);
// });
// app.get('/post', (req, res) => {
//     res.cookie('Test', "laiba");
//     res.send(`hello it is too amazing`);
// });
app.get('/comment', (req, res) => {
    res.send(`hello it is too amazing`);
});
app.get('/contact', (req, res) => {
    res.send(`hello it is too amazing`);
});
app.get('/login', (req, res) => {
    res.send(`hello it is too amazing`);
});
app.get('/register', (req, res) => {
    res.send(`hello it is too amazing`);
});
