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
            res.statusCode = 200;
            break;

        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break

        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break

        default:
            path += '404.html';
            res.statusCode = 404;
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



// nodemon Installation ------> npm install -g nodemon
// lodash Installation -------> npm install lodash