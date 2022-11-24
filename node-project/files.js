// Interact with file system
// step 1 import the fs module built in to node.js

const fs = require('fs');
// reading files readFile()  uses 2 arguments
// fs.readFile('./docs/blog1.txt', (err, data) => {
//   if (err) {
    // console.log(err)
//   }
//   console.log(data.toString()); // without toString, output is buffer 
// });
// console.log('last line');

// writing files can have 3 arguments, writeFile  can create a file also
// fs.writeFile('./docs/blog1.txt', 'using asynchronous', () => {
    // console.log('file successfully written');
// });

// directories, ! doesn't run if file already exists 
if (!fs.existsSync('./assets')) { 
 fs.mkdir('./assets', () => {
     if (err) {
        console.log(err)
     }
     console.log('folder created');
 });
} /* else { // else  rmdir to delete
    fs.rmdir('./assets', () => {
        if (err) {
            console.log(err)
        }
        console.log('folder deleted')
    }) 
} */
// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted')
    })
}