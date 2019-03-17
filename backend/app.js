const express = require('express');
const cookieParser = require('cookie-parser');
const logRequest = require('./src/utils/logger');

const fs = require('fs');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());
app.use(logRequest);

module.exports = app;
