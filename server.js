// import http from 'http';

// const server = http.createServer((req, res) => {
//     res.writeHead(200, 'OK', {
//         'Content-Type': 'text/plain'
//     });

//     res.write('Hello ');
//     res.write('world\n');

//     console.log(res.getHeaders());

//     res.end('Finished!');
// });

// server.listen(3000, () => {
//     console.log('Server running...');
// });


// Սա նշանակում է՝
// դու Node.js - ին ասում ես՝
// «տուր ինձ http մոդուլը, որ server սարքեմ»
// import http from 'http';
// // Այստեղ դու ստեղծում ես server req → user-ի հարցումը (ինչ է ուզում) res → քո պատասխանը user - ին
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.statusMessage = 'OK';
// // Սրանով դու ասում ես browser - ին՝ «Ես քեզ text եմ ուղարկում(ոչ HTML, ոչ JSON)» Եթե սա չդնես՝ երբեմն browser - ը չի հասկանում տվյալը
//     res.setHeader('Content-Type', 'text/plain');

//     console.log('headersSent before:', res.headersSent);

//     res.write('Hello, ');
//     res.write('world!\n');

//     console.log('headersSent after write:', res.headersSent);

//     res.end('Goodbye!\n');
// });

// server.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });