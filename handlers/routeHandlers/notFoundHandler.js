// module scaffolding

const handler = {};

handler.notFoundHandler = (requestProperties, cb) => {
  console.log(requestProperties);
  cb(404, {
    message: 'Path is not found',
  });
};

module.exports = handler;
