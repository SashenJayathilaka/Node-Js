const http = require('http');

const sever = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    res.write('<head><link real="styleseet" href="#"></head>');
    res.write('<p>Hello Sashen</p>');
    res.write('<p>Hello Sashen again</p>');
    res.end();
});

sever.listen(3000, 'localhost', () => {
    console.log('listerning for request on port 3000');
});