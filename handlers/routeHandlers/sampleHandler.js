// module scaffolding

const handler = {};

handler.sampleHandler = (requestProperties, cb) => {
  console.log(requestProperties);
  cb(200, {
    message: 'This is a sample URL',
  });
};

module.exports = handler;
