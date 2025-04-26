# Petite Côte Immo

**Projet Web d'annonces immobilières spécialisé dans la vente de terrains sur la Petite Côte (Sénégal).**

## Description
Petite Côte Immo est une plateforme immobilière permettant aux particuliers et aux investisseurs de :
- Rechercher des terrains à vendre.
- Déposer leurs propres annonces de terrains (avec paiement).
- Contacter les vendeurs directement.

Un espace d'administration permet de valider/refuser les annonces.

## Fonctionnalités principales
- Moteur de recherche filtré (localisation, surface, prix).
- Dépôt d'annonce payant via Stripe.
- Validation manuelle des annonces par un administrateur.
- Section blog pour booster le SEO.
- Design moderne, minimaliste et responsive.

## Technologies utilisées
- HTML5 / CSS3 / JavaScript Vanilla
- Node.js (serveur pour paiement et envoi d'email)
- Stripe API (paiement)
- Fichiers JSON pour stockage simple

## Installation
1. Cloner le dépôt :
```bash
git clone https://github.com/ton-utilisateur/petite-cote-immo.git
```
2. Installer les dépendances serveur :
```bash
cd server
npm install
```
3. Créer un fichier `.env` :
```plaintext
STRIPE_SECRET_KEY=ton_cle_secrete_stripe
EMAIL_USER=ton_email
EMAIL_PASS=mot_de_passe_email
```
4. Lancer le serveur backend :
```bash
node stripe-payment.js
```

## Auteur
**Petite Côte Immo** - Projet 2025

---

```json
// Fichier : index.json (structure de base pour référencement ou API future)
{
  "site": "Petite Côte Immo",
  "description": "Votre plateforme pour trouver et vendre des terrains sur la Petite Côte.",
  "url": "https://petitecoteimmo.com",
  "contact_email": "contact@petitecoteimmo.com",
  "social": {
    "facebook": "https://facebook.com/petitecoteimmo",
    "instagram": "https://instagram.com/petitecoteimmo"
  },
  "categories": ["Terrains", "Immobilier", "Investissement", "Afrique de l'Ouest"]
}
