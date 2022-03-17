const fs = require('fs');

// reading files

fs.readFile('./txt/index.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});



// wirting files

fs.writeFile('./txt/index.txt', 'Hello World' , () => {
    console.log('file was written');
});

fs.writeFile('./txt/index2.txt', 'Hello Again' , () => {
    console.log('file was written');
});



// directories

if (!fs.existsSync('./assets')) {

    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Folder was created")
    });

}else{
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder was deleted')
    })
}


// delete filess

if (fs.existsSync ('./txt/deleteme.txt')) {
    fs.unlink('./txt/deleteme.txt' , (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file was deleted')
    })
}