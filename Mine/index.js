// passworrd and user name Mongo DB

// ipsnaveen123          QRhRNX6dazhxYc7O

// coderdost             eLp6E7NsSuB3V4* 

// ipsnaveen123
// 34pkGPY1YPcHo4Yn










// // // // const lib = require('./lib.js');
// // // // // import {sum,sub,mul,div} from './lib.js'
// // // // const fs = require('fs');
// // // // const t1 = performance.now();
// // // // fs.readFile('demo.txt', 'utf-8', (err, txt) => {
// // // //   console.log(txt);
// // // // });
// // // // const t2 = performance.now();
// // // // console.log(t2-t1);
// // // // console.log(lib.sum(2, 3));
// // // // console.log(lib.sub(2, 3));
// // // // console.log(lib.mul(2, 3));
// // // // console.log(lib.div(2, 3));

// // // // const arg = process.argv;

// // // // console.log(parseInt(arg[2]) + parseInt(arg[3]));

// // // const os = require('os');
// // // console.log(os.arch()); // 'x64'
// // // console.log(os.uptime()); // 10000


// // const fs = require('fs');
// // const index = fs.readFileSync('./index.html', 'utf-8')
// // const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
// // const http = require('http');
// // const { title } = require('process');
// // const product = data.products[0];
// // const productList = data.products;
// // const server = http.createServer((req, res) => {
// //   console.log("Server is Started.....")
// //   //   if (req.url.startsWith('/product')) {
// //   //     const newUrl = req.url.split('/');
// //   //     const i = newUrl[newUrl.length - 1];
// //   //     console.log(i);

// //   //     const changeIndex = index.replace("**title**", productList[i].title).replace("**url**", productList[i].thumbnail).replace("**rating**", productList[i].rating).replace("**price**", productList[i].price);
// //   //     res.end(changeIndex);


// //   console.log(req.url.split('?')[1]);
// //   const Query = req.url.split('?')[1];
// //   const id = Query.split('=')[1];
// //   // id = (+id);
// //   console.log(id);
// //   res.setHeader("content-type", "text/html");
// //   const changeIndex = index.replace("**title**", productList[id].title).replace("**url**", productList[id].thumbnail).replace("**rating**", productList[id].rating).replace("**price**", productList[id].price);
// //   res.end(changeIndex);


// //   // // console.log(req.url, req.method)
// //   // switch (req.url) {
// //   //   case '/':
// //   //     res.setHeader("content-type", "text/html");
// //   //     res.end(index);
// //   //     break;
// //   //   case '/api':
// //   //     res.setHeader("content-type", "application/json")
// //   //     res.end(JSON.stringify(data));
// //   //     break;

// //   //   case '/demo':
// //   //     if (req.method == "POST") {
// //   //       res.setHeader("content-type", "text/html")
// //   //       res.end(index);
// //   //       break;
// //   //     }
// //   //     if (req.method == "GET") {
// //   //       res.setHeader("content-type", "application/json")
// //   //       res.end(JSON.stringify(data));
// //   //       break;
// //   //     }

// //   //   default:
// //   //     res.setHeader("content-type", "text/html");
// //   //     res.writeHead(404);
// //   // }
// //   // console.log(req.url)
// //   // res.setHeader("Hello", "World")
// //   // res.setHeader("Content-type", "application/json")
// //   // console.log(data);
// //   // res.end(index);

// // })
// // const arg = process.argv;
// // server.listen(arg[2]); 




// const fs = require('fs');
// const index = fs.readFileSync('./index.html', 'utf-8')
// const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
// const product = data.products[0];
// const productList = data.products;

// const express = require('express');
// const server = express();

// // server.use(express.static('D:/Code/Web D/BackEnd/Mine'));
// // server.use((req, res, next) => {
// //   console.log(req.url, req.cookies,req.httpVersion);
// //   next();
// // })
// // const auth = (req, res, next) => {
// //   console.log(req.url, req.cookies, req.httpVersion);
// //   if (req.body.password == '123') {
// //     next();
// //   } else {
// //     res.sendStatus(401);
// //   }
// // };
// // server.use(auth);
// server.use(express.json());

// const morgan = require('morgan');
// // console.log(morgan('tiny'))
// server.use(morgan('combined'));
// server.use(express.static('public'))


// server.get('/', (req, res) => {
//   res.send("Get Method")
// });
// server.put('/', (req, res) => {
//   res.send("put Method")
// });
// server.post('/', auth, (req, res) => {
//   res.send("post Method")
//   console.log(res.password);
// });
// server.post('/', (req, res) => {
//   res.sendFile('index.html');
// });
// server.delete('/', (req, res) => {
//   res.send("delete Method")
// });
// server.patch('/', (req, res) => {
//   res.send("patch Method")
// });


// // server.get('/', (req, res) => {
// //   // res.send('<h1>Hello world</h1>');
// //   res.sendFile('index.html');
// //   // res.json(productList)
// //   // res.sendStatus(301)
// // });




// server.listen(8080);




// const express = require('express');
// const morgan = require('morgan');

// const server = express();

// server.use(morgan('tiny'));
// server.get('/',(req,res)=>{
//   res.send("hello world");
// })
// server.listen(8080);







// ///////////////////////REST API////////////////////////////////////
// const fs = require('fs');
// const index = fs.readFileSync('./index.html', 'utf-8')
// const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
// const products = data.products;

// const express = require('express');
// const server = express();

// // C R U D

// // create POST API......
// server.use(express.json());
// server.post('/products', (req, res) => {
//   products.push(req.body);
//   res.sendStatus(201).json(req.body);
// })


// // reading GET API......
// server.get('/products', (req, res) => {
//   res.sendStatus(201).send(products);
// })

// server.get('/products/:id', (req, res) => {
//   const id = +req.params.id;
//   const product = products.find(p => p.id === id);
//   res.json(product);
// })

// // Update PUT API......

// server.put('/products/:id', (req, res) => {
//   const id = +req.params.id;
//   const productIndex = products.findIndex(p => p.id === id);
//   products.splice(productIndex, 1, { id: id, ...req.body })
//   // product.title = data.title;
//   // product.description = data.description;
//   // product.price = data.price;
//   // product.discountPercentage = data.title;
//   // product.title = data.rating;
//   res.sendStatus(201).json();
// })
// // better may be using the patch......
// // in put over write will occure where as in patch the replace will happen to only those Field 
// // which are willing to update 

// server.patch('/products/:id', (req, res) => {
//   const id = +req.params.id;
//   const productIndex = products.findIndex(p => p.id === id);
//   const product = products[productIndex];
//   products.splice(productIndex, 1, { ...product, ...req.body })
//   res.sendStatus(201).json();
// })

// // Delete DELETE API.....
// server.delete('/products/:id', (req, res) => {
//   const id = +req.params.id;
//   const productIndex = products.find(p => p.id === id)
//   products.splice(productIndex, 1);
//   res.sendStatus(201).json();
// })



// server.listen(8080, () => {
//   console.log("Server started at 8080.............")
// })




// model view controller .........................
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const server = express();
const productRouter = require('./routes/product');
const morgan = require('morgan');

// DB connection code
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log("Database Connected");
}

// body parser.........
server.use(express.json());
server.use(morgan('default'))
server.use(express.static('public'));
server.use('/products', productRouter.router);


server.listen(8080, () => {
  console.log("Server started at 8080.............")
})


