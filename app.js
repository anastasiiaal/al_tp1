const express = require('express');
const app = express();
const routes = require('./routes');

// Middlewares
app.use(express.json());

// Utilisation des routes
app.use('/api', routes);

// Démarrer le serveur
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});

module.exports = app;
