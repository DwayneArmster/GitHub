// establish http  requirement 
const http = require('http');
const fs = require('fs');

//   create server    get post url, 

const server = http.createServer((req, res) => {
  console.log(req.url, req.method); // previously ('request made');

  // set header content type
  res.setHeader('Content-Type', 'text/html'); //'text/html' or'text/plain'
// set path to folder
let path = './views/';
switch(req.url) {
  case '/':
    path += 'index.html';
    res.statusCode = 200; // set status code 200 range is successful
    break;
  case '/about':
    path += 'about.html';
    res.statusCode = 200;
    break;
  case '/about-me':
    res.statusCode = 301;
    res.setHeader('Location', '/about');
    res.end();
  default:
    path += '404.html';
    res.statusCode = 404; // set status code, 400 range is client/user error
    break;
}

  // send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      // res.write(data); instead add data to .end()
      res.end(data);
    }
  })
 
});
// after server created must have a listener 
// .listen(port#, 'host name local/etc')
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});
