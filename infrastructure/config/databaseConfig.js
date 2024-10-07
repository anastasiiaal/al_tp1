const Sequelize = require('sequelize');
require('dotenv').config(); // Pour charger les variables d'environnement du fichier .env

const sequelizeInstance = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    { host: process.env.DB_HOST, 'dialect': 'mysql' }
)


// Test de la connexion
sequelizeInstance.authenticate()
.then(() => {
    console.log('Connexion à la base de données réussie.');
})
.catch(err => {
    console.error('Erreur lors de la connexion à la base de données:', err);
});


module.exports = sequelizeInstance