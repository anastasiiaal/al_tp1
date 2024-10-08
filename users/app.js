// Configuration de express
const express = require('express');
const path = require('path');

// Lecture du fichier .env
require('dotenv').config()

// Lecture du fichier models/index.js afin de lancer la synchronisation de Sequelize
require('./persistence/models/index.js');

// Importation des routeurs
const indexRouter = require('./presentation/routes/index.js');
const userRoutes = require('./presentation/routes/userRoutes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/user', userRoutes);  

module.exports = app;
