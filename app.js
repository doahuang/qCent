const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const ncentSDK = require('./source/index');
const sdk = new ncentSDK();

const app = express();
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('*', (req, res) => {
  res.status(200).send(sdk.createWalletAddress());
});

module.exports = app;
