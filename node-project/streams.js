const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'}); // use here instead of .toString() as argument 
const writeStream = fs.createWriteStream('./docs/blog4.txt');
const makeHyper = fs.createWriteStream('./views/index.html');
const aboutPage = fs.createWriteStream('./views/about.html');
/*
readStream.on('data', (chunk) => {
  console.log('---- NEW CHUNK -----');  
  console.log(chunk);
  writeStream.write('\nNEW CHUNK\n');
  writeStream.write(chunk);
});
*/
// piping same as readStream.on() above
readStream.pipe(writeStream);
