# GitHub 
This is a record of my practice code in Visual Studio, following a Node.js course. So far I have learned how to read, write, 
and delete files using the fs module with the res object.
I have also created a server through these steps: 
1) adding the http module to the server.js file 
2) creating server by using const server = http.createServer((req, res) => {
console.log(req.url, req.method);
3) set header content type to html with: res.setHeader('Content-Type', 'texthtml);
4) created a listener and set it to local host  port 3000
server.listen(3000, 'localhost', () => console.log('listening for requests on port 3000');
other things that I have learned include: sending html files through node.js, creating and setting  a path for local server and files,
sending request codes for successful, redirected, and error codes. Read & Write streams of data, using pipe to change buffer to strings.
