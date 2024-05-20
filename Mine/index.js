// // const lib = require('./lib.js');
// // // import {sum,sub,mul,div} from './lib.js'
// // const fs = require('fs');
// // const t1 = performance.now();
// // fs.readFile('demo.txt', 'utf-8', (err, txt) => {
// //   console.log(txt);
// // });
// // const t2 = performance.now();
// // console.log(t2-t1);
// // console.log(lib.sum(2, 3));
// // console.log(lib.sub(2, 3));
// // console.log(lib.mul(2, 3));
// // console.log(lib.div(2, 3));

// // const arg = process.argv;

// // console.log(parseInt(arg[2]) + parseInt(arg[3]));

// const os = require('os');
// console.log(os.arch()); // 'x64'
// console.log(os.uptime()); // 10000


const fs = require('fs');
const index = fs.readFileSync('./index.html', 'utf-8')
const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
const http = require('http');
const { title } = require('process');
const product = data.products[0];
const productList = data.products;
const server = http.createServer((req, res) => {
  console.log("Server is Started.....")
  //   if (req.url.startsWith('/product')) {
  //     const newUrl = req.url.split('/');
  //     const i = newUrl[newUrl.length - 1];
  //     console.log(i);

  //     const changeIndex = index.replace("**title**", productList[i].title).replace("**url**", productList[i].thumbnail).replace("**rating**", productList[i].rating).replace("**price**", productList[i].price);
  //     res.end(changeIndex);


  console.log(req.url.split('?')[1]);
  const Query = req.url.split('?')[1];
  const id = Query.split('=')[1];
  // id = (+id);
  console.log(id);
  res.setHeader("content-type", "text/html");
  const changeIndex = index.replace("**title**", productList[id].title).replace("**url**", productList[id].thumbnail).replace("**rating**", productList[id].rating).replace("**price**", productList[id].price);
  res.end(changeIndex);
  

  // // console.log(req.url, req.method)
  // switch (req.url) {
  //   case '/':
  //     res.setHeader("content-type", "text/html");
  //     res.end(index);
  //     break;
  //   case '/api':
  //     res.setHeader("content-type", "application/json")
  //     res.end(JSON.stringify(data));
  //     break;
    
  //   case '/demo':
  //     if (req.method == "POST") {
  //       res.setHeader("content-type", "text/html")
  //       res.end(index);
  //       break;
  //     }
  //     if (req.method == "GET") {
  //       res.setHeader("content-type", "application/json")
  //       res.end(JSON.stringify(data));
  //       break;
  //     }

  //   default:
  //     res.setHeader("content-type", "text/html");
  //     res.writeHead(404);
  // }
  // console.log(req.url)
  // res.setHeader("Hello", "World")
  // res.setHeader("Content-type", "application/json")
  // console.log(data);
  // res.end(index);

})
const arg = process.argv;
server.listen(arg[2]);