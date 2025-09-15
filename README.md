# TP BACK – Gestion des missions et des candidatures

## À propos du projet

Ce projet a été réalisé dans le cadre de l’examen **CCP2**. Il s’agit d’un backend permettant de **gérer des missions et les candidatures** des bénévoles auprès des associations.

Les fonctionnalités principales sont :

- Gestion des utilisateurs (`benevole` et `association`)
- Création et gestion des missions par les associations
- Soumission et suivi des candidatures des bénévoles
- Gestion des statuts des candidatures (`en attente`, `acceptee`, `refusee`)

L’objectif est de **modéliser correctement la base de données**, d’assurer l’intégrité des relations entre les tables, et de mettre en place un backend fonctionnel capable de gérer ces opérations.

## Structure de la base de données

**Table `user`** – contient les informations des bénévoles et des associations :

- `id` : identifiant unique (clé primaire)
- `type` : type de l’utilisateur (`benevole` ou `association`)
- `name` : nom de l’utilisateur
- `email` : email unique de l’utilisateur
- `hashed_password` : mot de passe hashé pour la sécurité

**Table `missions`** – contient les informations des missions proposées par les associations :

- `id` : identifiant unique de la mission (clé primaire)
- `title` : titre de la mission
- `descrip_Mission` : description détaillée de la mission
- `date_mission` : date prévue de la mission
- `id_user` : référence à l’association qui propose la mission (clé étrangère vers `user`)

**Table `candidature`** – contient les candidatures des bénévoles aux missions :

- `id` : identifiant unique de la candidature (clé primaire)
- `date_candidature` : date de soumission de la candidature
- `status` : statut de la candidature (`en attente`, `acceptee`, `refusee`)
- `id_user` : référence au bénévole qui postule (clé étrangère vers `user`)
- `id_mission` : référence à la mission (clé étrangère vers `missions`)

## Contraintes et intégrité

- **Clés primaires** : Chaque table possède une clé primaire (`id`) qui identifie de manière unique chaque enregistrement.
- **Clés étrangères** :

  - `missions.id_user` → `user.id` : chaque mission est liée à une association
  - `candidature.id_user` → `user.id` : chaque candidature appartient à un bénévole
  - `candidature.id_mission` → `missions.id` : chaque candidature est liée à une mission

- **Contraintes d’unicité** : `user.email` doit être unique pour éviter les doublons
- **Contraintes de type et valeurs possibles** :

  - `user.type` : uniquement `benevole` ou `association`
  - `candidature.status` : uniquement `en attente`, `acceptee` ou `refusee`


## Comment exécuter le projet

1. Cloner le projet :

   ```bash
   git clone <url-du-projet>
   cd <nom-du-projet>
   ```

2. Installer les dépendances :

   ```bash
   npm install
   ```

3. Lancer le serveur :

   ```bash
   npm start
   ```

Le serveur sera alors accessible sur **[http://localhost:3000](http://localhost:3000)** (ou le port configuré dans ton projet).

## Auteur

Nina – Étudiante en développement web et web mobile
