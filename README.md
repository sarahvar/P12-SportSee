# React + Vite

Documentation du Projet

*Introduction

Ce projet est une application web développée en React.js qui permet aux utilisateurs de visualiser et de gérer leurs données de santé et de fitness.

*Configuration Requise

Assurez-vous d'avoir les éléments suivants installés sur votre système :

*Node.js (version 12 ou supérieure)
npm (gestionnaire de paquets Node.js)
Installation
Clonez ce dépôt sur votre machine locale.
Ouvrez une console de commande et naviguez jusqu'au répertoire du projet.
Exécutez la commande suivante pour installer les dépendances :
Copy code
npm install
Configuration de l'Environnement
Créez un fichier .env à la racine du projet avec les paramètres suivants :


*VITE_API_URL=http://localhost:3000
REACT_APP_USE_MOCK_DATA=true // true=utilisation des données mockées, false=API
Assurez-vous d'adapter l'URL de l'API en fonction de votre environnement.

*Utilisation
Une fois les dépendances installées et l'environnement configuré, vous pouvez démarrer l'application en exécutant la commande suivante :

*sql

npm start
L'application sera accessible à l'adresse http://localhost:3000 dans votre navigateur web par défaut.

*Structure du Projet
Le projet est organisé comme suit :

src/ : Ce répertoire contient le code source de l'application.
components/ : Composants réutilisables de l'application.
pages/ : Pages de l'application.
api/ : Fichiers pour les appels API.
service/ : Fichiers pour les services utilitaires.
assets/ : Ressources statiques telles que les images et les icônes.
App.js : Point d'entrée de l'application React.
index.js : Point d'entrée pour le rendu de l'application React.
public/ : Ce répertoire contient les fichiers statiques de l'application, tels que l'HTML de base.

Fichiers d'Utilité
api/call.js : Contient les fonctions pour effectuer les appels API vers le serveur.
service/dataSwitch.js : Fournit des fonctions pour basculer entre les données réelles et les données simulées.

