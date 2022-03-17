const fs = require('fs');

const readStream = fs.createReadStream('./txt/index3.txt',{encoding:'utf8'});
const writeStream = fs.createWriteStream('./txt/index4.txt');




readStream.on('data',(chunk) => {
    console.log('-----------New Chunk-------------');

    //console.log(chunk.toString());
    console.log(chunk);                                       // Another Methord
    writeStream.write('\nNew Chunk\n')
    writeStream.write(chunk);
});



readStream.pipe(writeStream);