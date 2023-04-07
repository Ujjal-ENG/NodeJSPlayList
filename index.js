// dependencies
const http = require('http');

const url = require('url');
const { StringDecoder } = require('string_decoder');

// app object - module scaffolding
const app = {};

// configuration
app.config = {
  port: 3000,
};

// create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`listening to port localhost:${app.config.port}`);
  });
};

// handle Request and Response
app.handleReqRes = (req, res) => {
  // request handling

  // get the url and parse it
  const parsedURL = url.parse(req.url, true);
  const path = parsedURL.pathname;
  const trimmedPath = path.replace(/^\/|\/+$/g, '');
  const method = req.method.toLowerCase();
  const queryStringObject = parsedURL.query;
  const headersObject = req.headers;
  const decoder = new StringDecoder('utf-8');
  let realData = '';
  req.on('data', (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on('end', () => {
    realData += decoder.end();
    
    // response handling
    res.end('Hello World');
  });
};
// start the server
app.createServer();
