const os = require('os');
const fs = require('fs');
const http = require('http');

// Q 01
// console.log('Hello World')

// Q 02
// console.log('Architecture ' + os.arch());
// console.log('CPUs ' + os.cpus().length);
// console.log('OS ' + os.platform());

// Q 03
// const fileName = __dirname + '/test.txt';
// fs.readFile(fileName, (err, data) => {
//     if(err) {
//         console.log(err)
//     }
//     console.log(data.toString());
// })

// const data = fs.readFileSync(fileName);
// console.log(data.toString());

// Q 04
// const fileName = __dirname + '/test.txt';
// const outFileName = __dirname + '/test-copy.txt';
// const readStream = fs.createReadStream(fileName);
// const writeStream = fs.createWriteStream(outFileName);
// readStream.on('data', data => {
//     console.log(data.toString());
// })
// readStream.pipe(writeStream);

// Q 05
// http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<h1>Hello World</h1>');
//     res.end();
// }).listen(3000);

/*
http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text.html');
    switch (req.method) {
        case 'GET':
            res.write('<h1>Hello World</h1>');
            res.end();
            break;
        case 'POST':
            req.on('data', data => {
                res.write('<h1>Hello ' + data + '</h1>');
                res.end();
            });
            break;
    }
}).listen(3000, (err) => {
    console.log('Server is listening to port 3000')
});
*/
