import { EventEmitter } from 'events';

const emitter = new EventEmitter();

emitter.on('login', async (req, res) => {
    try {
        console.log('query -> ', req.query);
        console.log('body -> ', req.body);

        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;
        res.end('<h1>login</h1>');
    } catch (e) {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 500;
        res.end(e);
    }
});

emitter.on('register', async (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.end('<h1>register</h1>');
});

emitter.on('profile', async (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.end('<h1>profile</h1>');
});

export default emitter;
