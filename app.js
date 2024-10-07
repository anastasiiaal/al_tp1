// Configuration de express
const express = require('express');
const path = require('path');

// Lecture du fichier .env
require('dotenv').config()

// Lecture du fichier models/index.js afin de lancer la synchronisation de Sequelize
require('./models/index.js');

// Importation des routeurs
const indexRouter = require('./routes/index.js');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

module.exports = app;
