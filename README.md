# Script d'Inscription au Marathon

Bonjour voici la notice explicative de l'inscription au marathon.

## Introduction
Ce script JavaScript crée une page web interactive pour l'inscription à un marathon. Il génère dynamiquement un formulaire d'inscription et un tableau pour afficher les participants.

## Fonctionnalités
1. Création d'un formulaire d'inscription
2. Affichage d'un tableau des participants
3. Ajout dynamique de nouvelles inscriptions au tableau

## Structure du Script

### 1. Fonction `createElement`
- Crée des éléments HTML avec des attributs spécifiés.
- Utilisée pour créer tous les éléments de la page.

### 2. Fonction `createForm`
- Génère le formulaire d'inscription avec tous ses champs.
- Crée des champs pour : nom, prénom, âge, année de naissance, numéro de dossard, et email.

### 3. Fonction `createTable`
- Crée le tableau pour afficher les participants.
- Génère l'en-tête du tableau avec les colonnes appropriées.

### 4. Fonction `addTableRow`
- Ajoute une nouvelle ligne au tableau avec les informations d'un participant.
- Appelée chaque fois qu'un formulaire est soumis.

### 5. Fonction `handleSubmit`
- Gère la soumission du formulaire.
- Récupère les données du formulaire.
- Ajoute ces données comme nouvelle ligne dans le tableau.
- Réinitialise le formulaire après soumission.

### 6. Événement `DOMContentLoaded`
- S'exécute quand la page est chargée.
- Crée la structure de la page en utilisant les fonctions ci-dessus.
- Ajoute un écouteur d'événements au formulaire pour gérer les soumissions.

## Logique du Script
1. Quand la page se charge, le script crée tous les éléments nécessaires (formulaire et tableau).
2. L'utilisateur remplit le formulaire d'inscription.
3. À la soumission du formulaire, le script :
   - Empêche le rechargement de la page.
   - Récupère les données saisies.
   - Ajoute ces données comme nouvelle ligne dans le tableau.
   - Réinitialise le formulaire pour une nouvelle saisie.
4. Le processus peut être répété pour ajouter autant d'inscriptions que nécessaire.

## Utilisation
1. Incluez ce script dans votre page HTML.
2. Assurez-vous d'avoir un fichier CSS lié pour le style.
3. Ouvrez la page dans un navigateur pour voir le formulaire et le tableau.
4. Remplissez le formulaire et soumettez-le pour voir les données s'ajouter au tableau.

## Conseils
- Utilisez la console du navigateur (F12) pour voir les logs détaillés.
- Expérimentez en modifiant les champs du formulaire ou les colonnes du tableau.
- Essayez d'ajouter de nouvelles fonctionnalités, comme la validation des données ou le tri du tableau.
