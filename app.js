// Axios PUT
import axios from 'axios';

const updatedPost = {
        title: 'foo',
        body: 'bar',
        userId: 1
};

const updatePost = async () => {
        try {
                const response = await axios.put(
                        'https://jsonplaceholder.typicode.com/posts/1',
                        updatedPost
                );

                console.log(response.data);
        } catch (error) {
                console.error('There was an error making the PUT request!', error);
        }
};

updatePost();


// // AXIOS POST
// import axios from 'axios';

// const newPost = {
//         title: 'foo',
//         body: 'bar',
//         userId: 1
// };

// const createPost = async () => {
//         try {
//                 const response = await axios.post(
//                         'https://jsonplaceholder.typicode.com/posts',
//                         newPost
//                 );

//                 console.log(response.data);
//         } catch (error) {
//                 console.error('There was an error making the POST request!', error);
//         }
// };

// createPost();

// // AXIOS GET
// import axios from 'axios';
// const getPosts = async () => {
//         try {
//                 const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//                 console.log(response.data);
//         } catch (error) {
//                 console.error('There was an error making the GET request!', error);
//         }
// };
// getPosts();

// // CREATE REQUEST USING HTTP MODULE
// import http from 'http';
// // const http = require('http');
// // Options for the GET request
// const options = {
//         hostname: 'jsonplaceholder.typicode.com',
//         port: 80,
//         path: '/posts',
//         method: 'GET'
// };

// // Make the GET request
// const req = http.request(options, (res) => {
//         let data = '';
//         // A chunk of data has been received.
//         res.on('data', (chunk) => {
//                 data += chunk;
//         });
//         // The whole response has been received.
//         res.on('end', () => {
//                 console.log('Response:', JSON.parse(data));
//         });
// });
// // Handle request errors
// req.on('error', (e) => {
//         console.error(`Problem with request: ${e.message}`);
// }); 
// // End the request
// req.end();




// let body = '';

// req.on('data', (chunk) => {
//         body += chunk.toString();
// });

// req.on('end', () => {
//         resolve(body);
// });

// req.on('error', (err) => {
//         reject(err);
// });

// const server = http.createServer(async (req, res) => {
//         try {
//                 if (req.method === 'POST') {
//                         const body = await getRequestBody(req);

//                         console.log(body);

//                         res.writeHead(200, { 'Content-Type': 'application/json' });
//                         res.end(JSON.stringify({
//                                 message: 'Data received',
//                                 data: body
//                         }));
//                 } else {
//                         res.writeHead(405, { 'Content-Type': 'text/plain' });
//                         res.end('Only POST method is allowed');
//                 }
//         } catch (err) {
//                 res.writeHead(500, { 'Content-Type': 'application/json' });
//                 res.end(JSON.stringify({
//                         message: 'Error receiving data',
//                         error: err.message
//                 }));
//         }
// });

// const PORT = 3000;

// server.listen(PORT, () => {
//         console.log(`Server is listening on port ${PORT}`);
// });

// //////////////////////////////////
// class Person {
//         constructor(name) {
//                 this.name = name;
//         }

//         sayHi() {
//                 return "Hi, my name is " + this.name;
//         }
// }

// class Student extends Person {
//         constructor(name, grade) {
//                 super(name); // վերցնում է Person-ի constructor-ը
//                 this.grade = grade;
//         }

//         showGrade() {
//                 return this.name + " is in grade " + this.grade;
//         }
// }

// // ստեղծում ենք object
// const s1 = new Student("John", 10);

// console.log(s1.sayHi());
// console.log(s1.showGrade());

////////////////////////////
// a = արդեն հավաքված գումար
// b = ընթացիկ թիվ
// 0 = սկզբնական արժեք
// 💡 շատ պարզ

// 👉 reduce = “հավաքել բոլորը մեկ արդյունքի մեջ”
// const array = [1, 2, 3, 4];

// const result = array.reduce((a, b) => a + b, 0);
// 🪜 Ինչ է կատարվում

// Սկսում ենք 0 - ից 👇

// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// const array = [1,2,3,4];

// const initialValue = 0;
// const sumWithInitial = array.reduce(
//         (accumulator, currentValue)=> accumulator + currentValue,
//         initialValue,
// );

// eventEmitter.on('userLogin', (name) => {
//         const handleEvent = new eventEmitter.emit
// });

// eventEmitter.emit('userLogin', 'Martun');


// // import the events module
// import {EventEmitter} from 'events';
// // Create an instance of EventEmitter
// const eventEmitter = new EventEmitter();

// // Define an event handler
// const handleEvent = (message)=>{
//         console.log(`Received message: ${message}`);
// };
// // Register the event handler for a specific event
// eventEmitter.on('myEvent', handleEvent);
// // Emit the event
// eventEmitter.emit('myEvent', 'Hello, world!');

/////////////////////////////////////////////////////

// export և import մի ֆայլից ուրիշ ֆայլ բան օգտագործես
// export = “տուր ուրիշներին”
// 👉 import = “վերցրու ուրիշից”

// Function(ֆունկցիա) — դա կոդի մի հատված է, որը դու գրում ես մեկ անգամ, ու հետո կարող ես կանչել(օգտագործել) շատ անգամներ
// Օրինակ
// function sayHello() {
//         console.log("Barev!");
// }
// sayHello(); // կտպի "Barev!"
// Ամփոփում
// 👉 Function = գործողություն
// 👉 կարող է ընդունել տվյալ(parameters)
// 👉 կարող է վերադարձնել արդյունք(return)

// Event նշանակում է դեպք / իրադարձություն։ Event = գործողություն, որը տեղի է ունենում ծրագրում
// դու սեղմում ես կոճակ → click event
// ստեղն ես սեղմում → keydown event
// էջը բացվում է → load event

// button.addEventListener('click', () => {
//         console.log('Դու սեղմեցիր կոճակը');
// });
// 'click' → event
// 👉 Պարզ ասած՝
// Event = “մի բան եղավ”

// Object(օբյեկտ) փոփոխական է, որտեղ տվյալները պահվում են բանալի(key) → արժեք(value) ձևով 🔑
// Օրինակ
// let user = {
//         name: "Martun",
//         age: 20,
//         isStudent: true
// };

// մասիվ  փոփոխական է, որի մեջ կարող ես պահել մի քանի արժեքներ միասին
// let names = ["Martun", "Anna", "Arman"]; // շատ արժեքներ
// ["Martun", "Anna", "Arman"]
// 0         1        2   ← index(համարներ)

///////////////////////////////////////////////////

// import http from 'http';
// import fs from 'fs/promises';
// import { readFile } from 'fs';

// const server = http.createServer(async function (req, res) {
//         res.setHeader('Content-Type', 'text/html');
//         res.statusCode = 200;

// const {pathname: url, searchParams} = new URL(`http://localhost:8080${req.url}`);

// const quer = Object.fromEntries(searchParams);

// console.log(searchParams);
//         console.log(quer);

//      async   function fullName(quer){
//              await fs.appendFile(`./${quer.fileName}`, quer.fileValue)
//         }
//         console.log(url);

//         fullName(quer);

//        if(req.url==='/home'){
//                const home = await fs.readFile ('./home.html');
//                res.end(home);
//                return;
               
//        }
//         const html = await fs.readFile('./index.html');
         
//         res.end(html);
// });

// server.listen(8080, function(){
//         console.log('Server Listening on port 8080');
// });



//////////////////////////////////////////////

// import http, { request } from 'http';

// const port = 8080;
// const hostname = '127.0.0.1';

// const server = http.createServer((request, response)=>{

// console.log('req.method, req.url');

//         console.log('');




//         response.statusCode = 200;

//         response.setHeader('Content-Type', 'text/plain');

        

//         response.end('Hello from Node.js');

        
// });

// server.listen(port, hostname, ()=>{
//         console.log(`Server running on port ${port}...`);
// });










//////////////////////////////////

// import { stat } from 'fs';
// import fs from 'fs/promises'
// import { readFile } from 'fs/promises';
// import {readdir} from 'fs/promises';

// ;(async()=>{
//     try{
        // const a = await readdir('./kukus');
        // console.log(a);

        // const result = await readFile('./package.json', 'utf8');
        // console.log(JSON.parse(result))

        // await fs.rename('./kukus/a', './kukus/g')
        // console.log('File renamed')

        // await fs.rm('./kukus/g',{recursive:true, force:true})
        // console.log('file delete')

        // await fs.rm('./kukus/g.html')
        // console.log('folder delete')

//     }catch (error){
// console.log(`${error.message}`);
//     }
   
// })();


////////////////////////////////////////

// import {appendFile} from 'fs/promises';

// ;(async()=>{
//     await appendFile('./kuku.json', '[\n');

//     for (let i = 0; i<10; i++){
//         const data = JSON.stringify(
//             {
//                 hello: 'world',
//                 kuku: 'lala',
//                 i,
//             },
//             null,
//             2
//         )
//         await appendFile('./kuku.json', data +(i ===9 ? '':',') + '\n');
//     }
//     await appendFile('./kuku.json', ']');
// })();


//////////////////////////////////////
//////////////////////////////////////

// import {appendFile} from 'fs/promises';

// ;(async()=>{
//     const data =  JSON.stringify(
//         {
//             hello: 'world',
//             kuku: 'lala'
//         },
//         null,
//         2
//     )
// })();


///////////////////
///////////////////

// import {appendFile} from 'fs/promises';

// ;(async()=>{
//     await appendFile('./kuku.txt', 'Hello kuku');
// })();


//////////////////////////
//////////////////////////

// import fs from 'fs/promises';

// function checkFile(file){
//     return fs
//     .access(file)
//     .then(()=>true)
//     .catch(()=>false);
// }

// ;(async()=>{
//     console.log(
//         await checkFile('./package.json')
//     );
// })();


//////////////////////////////
/////////////////////////////


// import fs from 'fs/promises';

// ;(async ()=>{
//     try {
//         const pathVal = './package.json';

//         await fs.access(pathVal);
//     }catch(err){
//         console.log(err)
//     }
// })();



////////////////////////
///////////////////////


// const {MY_VARIABLE, YES} = process.env

// console.log(process.env.MY_VARIABLE);
// console.log(YES);

// console.log(Process.platform);

// console.log(Process.arch);

// console.log(Process.memoryUsage());
// console.log(Process.memoryUsage());