import http from 'http';
import { EventEmitter } from 'events';
import parser from './parser.js';

// USERS emitter
const usersEmitter = new EventEmitter();

usersEmitter.on('login', (req, res) => {
    console.log('login query ->', req.query);
    console.log('login body ->', req.body);

    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>login</h1>');
});

usersEmitter.on('register', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>register</h1>');
});

usersEmitter.on('profile', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>profile</h1>');
});

// POSTS emitter
const postsEmitter = new EventEmitter();

postsEmitter.on('createPost', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>post created</h1>');
});

// SERVER
const server = http.createServer(async (req, res) => {
    try {
        await parser(req);

        if (req.method === 'POST' && req.url === '/login') {
            usersEmitter.emit('login', req, res);
            return;
        }

        if (req.url === '/register') {
            usersEmitter.emit('register', req, res);
            return;
        }

        if (req.url === '/profile') {
            usersEmitter.emit('profile', req, res);
            return;
        }

        if (req.method === 'POST' && req.url === '/posts') {
            postsEmitter.emit('createPost', req, res);
            return;
        }

        res.statusCode = 404;
        res.end('<h1>404 Not Found</h1>');

    } catch (e) {
        res.statusCode = 500;
        res.end(`<h1>Error: ${e.message}</h1>`);
    }
});

server.listen(8080, () => {
    console.log('Server running on port 8080');
});