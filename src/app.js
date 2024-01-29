const handlebars = require('express-handlebars');
const express = require('express');
const router = require('./router');
const path = require('path');

const app = express();

app.use(router);
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));



module.exports = app;
