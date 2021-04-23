//console.log('Hello World');

// const os = require('os');
//
// console.log('Architecture ' + os.arch());
// console.log('CPUs ' + os.cpus());
// console.log('OS ' +os.platform());

/*const fs = require('fs');
const fileName = __dirname + '/test.txt';
/!*const outFileName = __dirname + '/test-copy.txt';
const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(fileName);

readStream.pipe(writeStream);

readStream.on('data', data => {
   console.log(data.toString());
});*!/

fs.readFile(fileName, (err, data) => {
   if(err){
      console.log(err);
   }
   console.log(data.toString());
});*/

const http = require('http');

http.createServer((req, res) => {
   res.setHeader('Content-Type', 'text/html');
   switch (req.method){
      case 'GET':
         res.write('<h1>Hello World</h1>');
         res.end();
         break;
      case 'POST':
         res.on('data', data => {
            res.write('<h1>Hello ' +data+ '</h1>');
            res.end();
         });
         break;
   }
}).listen(3000, (err) => {
   console.log('Server is listening to port 3000')
});