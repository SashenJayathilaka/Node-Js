const http = require('http');
const fs = require('fs');

const sever = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            break;

        case '/about':
            path += 'about.html';
            break

        default:
            path += '404.html';
            break;
    }


    // send the html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }else {
            //res.write(data);
            res.end(data);
        }
    });
    
});

sever.listen(3000, 'localhost', () => {
    console.log('listerning for request on port 3000');
});