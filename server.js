var http = require('http');

//create a server object:
http.createServer(function (req, res) {
    if (req.url == '/krishna'){
  //res.write(req(URLSearchParams));
  res.write('Hello World!,krishna'); //write a response to the client
  res.end();
     }
     else{

        res.write('UNAUTHORIZED ACCESS'); //write a response to the client
  res.end();
     } //end the response
}).listen(8089); //the server object listens on port 8080
