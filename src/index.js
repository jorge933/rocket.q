const express = require('express');
const server = express();
const path = require('path');

const routes = require('./routes');

server.set('view engine', 'ejs');

server.use(express.static('public'))

server.set('views', path.join(__dirname, 'views'));

server.use(express.urlencoded({extended: true}))

server.use(routes);

server.listen(3000);