'use strict';
require(`dotenv`).config();
const http = require(`http`);
const aws4  = require(`aws4`);
const request = require(`request-promise`);

let opts = {
  method: "POST",
  host: process.env.AWS_HOST,
  path: process.env.AWS_PATH,
  uri: `https://${process.env.AWS_HOST}${process.env.AWS_PATH}`,
  body: JSON.stringify({
    key1: "key1",
    key2: "key2",
    key3: "key3",
  })
};

// assumes AWS credentials are available in process.env
aws4.sign(opts);

console.log('starting request', opts);
request(opts)
.then((response) => {
  console.log('response', response);
});
