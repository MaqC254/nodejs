const http = require('http');
const fs = require('fs');
const _ = require('lodash');


const server = http.createServer((req,res)=>{
    //lodash
    const rand = _.random(0, 20);
    console.log(rand);

    let path = './views/';

    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    res.setHeader('Content-Type','text/html');
    // res.write('This is the response from the server');
    // res.end();
    fs.readFile(path,(err, data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
           // res.write(data);
           //if just one item we can use the end to submit the data as below
            res.end(data);
        }
    })
});

server.listen(3000,'localhost',()=>{

})