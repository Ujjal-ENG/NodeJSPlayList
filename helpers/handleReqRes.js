// module scafollding

const url = require('url');
const { StringDecoder } = require('string_decoder');

const handler = {};

handler.handleReqRes = (req, res) => {
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
module.exports = handler;
