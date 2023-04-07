// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
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
app.handleReqRes = handleReqRes;
// start the server
app.createServer();
