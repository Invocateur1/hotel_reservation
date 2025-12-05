# Application de Réservation d'Hôtel

> Une application web de réservation d'hôtel full‑stack construite avec Angular, Express.js et MongoDB.


---

## 📌 Description

Ce projet propose une plateforme de réservation d'hôtel en ligne. Les utilisateurs peuvent naviguer parmi les hôtels disponibles, créer un compte, se connecter et réserver un séjour en sélectionnant des hôtels et des dates. Le système combine une interface front‑end moderne avec un backend RESTful et une base de données MongoDB.

---

## 🧰 Technologies Utilisées

- **Frontend**: Angular  
- **Backend**: Express.js (Node.js)  
- **Base de données**: MongoDB (géré via MongoDB Compass)  

---

## ✅ Fonctionnalités

- Inscription et connexion des utilisateurs  
- Recherche et affichage des hôtels  
- Réservation d'hôtel avec sélection des dates  
- Stockage des données persistantes dans MongoDB  

---

## 🖥️ Composants Front‑end (Angular)

- **Home** — page d'accueil de l'application  
- **Login** — formulaire de connexion de l'utilisateur  
- **Register** — formulaire d'inscription pour un nouvel utilisateur  
- **Listing** — liste de tous les hôtels disponibles  
- **Booking** — page de réservation où les utilisateurs sélectionnent les dates et confirment leur réservation  

---

## 🔧 Routes Back‑end (Express.js)

- **User Router** — gestion de l'inscription, connexion et de l'authentification des utilisateurs (génération de jetons)  
- **Hotel Router** — gestion de la récupération et de la recherche d'hôtels  
- **Booking Router** — gestion des réservations d'hôtels par les utilisateurs avec dates spécifiées  

---

## 🗂️ Schémas de Base de Données

### Hotel  
- nom  
- prix  
- chambres (nombre de chambres)  
- salles de bains (nombre de salles de bains)  
- imageUrl (chemin ou URL de l'image de l'hôtel)  

### Booking  
- (lié) ID de l'utilisateur  
- (lié) ID de l'hôtel  
- dates de réservation (arrivée / départ)  

### User  
- nom d'utilisateur / e‑mail  
- mot de passe haché  
- (autres informations utilisateur)  

---

## 🚀 Comment Lancer le Projet Localement

```bash
# 1. Clonez le repository
git clone https://github.com/Invocateur1/hotel_reservation.git
cd hotel_reservation

# 2. Installez les dépendances du backend
cd backend
npm install

# 3. Installez les dépendances du frontend
cd ../frontend
npm install

# 4. Assurez-vous que MongoDB fonctionne
# Si vous utilisez Docker et docker-compose, lancez simplement :
docker compose up

# 5. Démarrez le serveur backend
cd ../backend
npm start

# 6. Démarrez le serveur frontend (Angular)
cd ../frontend
ng serve
